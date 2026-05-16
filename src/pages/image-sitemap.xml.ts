import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://casmedlin.com';

  const categories = [
    { folder: 'landscapes', name: 'Landscapes', page: '/landscapes' },
    { folder: 'architecture', name: 'Architecture', page: '/architecture' },
    { folder: 'pets', name: 'Pets', page: '/pets' },
    { folder: 'portraits', name: 'Portraits', page: '/portraits' },
    { folder: 'wildlife', name: 'Wildlife', page: '/wildlife' },
    { folder: 'events', name: 'Events', page: '/events' },
    { folder: 'astrophotography', name: 'Astrophotography', page: '/astrophotography' },
  ];

  const pages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/landscapes', priority: '0.9', changefreq: 'weekly' },
    { url: '/architecture', priority: '0.9', changefreq: 'weekly' },
    { url: '/pets', priority: '0.9', changefreq: 'weekly' },
    { url: '/portraits', priority: '0.9', changefreq: 'weekly' },
    { url: '/wildlife', priority: '0.9', changefreq: 'weekly' },
    { url: '/events', priority: '0.9', changefreq: 'weekly' },
    { url: '/astrophotography', priority: '0.9', changefreq: 'weekly' },
    { url: '/about', priority: '0.7', changefreq: 'monthly' },
    { url: '/sitemap', priority: '0.5', changefreq: 'monthly' },
    { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  ];

  interface ImageEntry {
    path: string;
    lastmod: string;
    category: string;
  }

  const images: ImageEntry[] = [];

  for (const cat of categories) {
    const folderPath = path.join('public', cat.folder);
    if (fs.existsSync(folderPath)) {
      const files = fs.readdirSync(folderPath);
      for (const file of files) {
        if (/\.(webp|jpg|jpeg|png|avif|gif)$/i.test(file)) {
          const filePath = path.join(folderPath, file);
          const stats = fs.statSync(filePath);
          images.push({
            path: `/${cat.folder}/${file}`,
            lastmod: stats.mtime.toISOString().split('T')[0],
            category: cat.name,
          });
        }
      }
    }
  }

  const now = new Date().toISOString();

  const urlEntries = pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${now.split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');

  const imageAltText: Record<string, string> = {
    'landscapes': 'Landscape photography by Cas Medlin',
    'architecture': 'Architectural photography by Cas Medlin',
    'pets': 'Pet photography by Cas Medlin',
    'portraits': 'Portrait photography by Cas Medlin',
    'wildlife': 'Wildlife photography by Cas Medlin',
    'events': 'Event photography by Cas Medlin',
    'astrophotography': 'Astrophotography and night sky photography by Cas Medlin',
  };

  const imageEntries = images.map(img => {
    const altText = imageAltText[img.category.toLowerCase()] || `${img.category} photography by Cas Medlin`;
    return `
  <url>
    <loc>${baseUrl}/${img.category.toLowerCase()}</loc>
    <lastmod>${img.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <image:image>
      <image:loc>${baseUrl}${img.path.replace(/ /g, '%20').replace(/\(/g, '%28').replace(/\)/g, '%29')}</image:loc>
      <image:title>${altText}</image:title>
    </image:image>
  </url>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urlEntries}
${imageEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};