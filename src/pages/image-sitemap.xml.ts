import type { APIRoute } from 'astro';
import portraits from './portraits.astro';
import landscapes from './landscapes.astro';
import architecture from './architecture.astro';
import pets from './pets.astro';
import wildlife from './wildlife.astro';
import events from './events.astro';
import astrophotography from './astrophotography.astro';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://casmedlin.com';

  const categories = [
    { folder: 'portraits', name: 'Portraits', page: '/portraits', photos: (portraits as any).photos || [] },
    { folder: 'landscapes', name: 'Landscapes', page: '/landscapes', photos: (landscapes as any).photos || [] },
    { folder: 'architecture', name: 'Architecture', page: '/architecture', photos: (architecture as any).photos || [] },
    { folder: 'pets', name: 'Pets', page: '/pets', photos: (pets as any).photos || [] },
    { folder: 'wildlife', name: 'Wildlife', page: '/wildlife', photos: (wildlife as any).photos || [] },
    { folder: 'events', name: 'Events', page: '/events', photos: (events as any).photos || [] },
    { folder: 'astrophotography', name: 'Astrophotography', page: '/astrophotography', photos: (astrophotography as any).photos || [] },
  ];

  const pages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/portraits', priority: '0.9', changefreq: 'weekly' },
    { url: '/landscapes', priority: '0.9', changefreq: 'weekly' },
    { url: '/architecture', priority: '0.9', changefreq: 'weekly' },
    { url: '/pets', priority: '0.9', changefreq: 'weekly' },
    { url: '/wildlife', priority: '0.9', changefreq: 'weekly' },
    { url: '/events', priority: '0.9', changefreq: 'weekly' },
    { url: '/astrophotography', priority: '0.9', changefreq: 'weekly' },
    { url: '/about', priority: '0.7', changefreq: 'monthly' },
    { url: '/sitemap', priority: '0.5', changefreq: 'monthly' },
    { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  ];

  const urlEntries = pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');

  let imageEntries = '';
  for (const cat of categories) {
    for (const photo of cat.photos) {
      const src = photo.src.startsWith('/') ? photo.src.slice(1) : photo.src;
      imageEntries += `
  <url>
    <loc>${baseUrl}${cat.page}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <image:image>
      <image:loc>${baseUrl}/${src.replace(/ /g, '%20').replace(/\(/g, '%28').replace(/\)/g, '%29')}</image:loc>
      <image:title>${photo.alt}</image:title>
    </image:image>
  </url>`;
    }
  }

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