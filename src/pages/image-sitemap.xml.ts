import type { APIRoute } from 'astro';

const site = 'https://casmedlin.com';

const pages = [
  {
    url: '/',
    images: [
      '/portraits/DSC086282.webp', '/CAS_0418.webp', '/events/DSC01007(1) 2.webp',
      '/2025-07-23_21-02-21_091.webp', '/294518D8-40EC-4C93-B49D-5A4BF14A0BD5DSC00146b.webp',
      '/portraits/DSC084535.webp', '/DSC04992.webp', '/portraits/2026-04-25_15-38-25_536.webp',
      '/events/DSC01765.webp', '/DSC03417.webp', '/portraits/DSC08371.webp',
      '/2025-09-11_19-48-13_491.webp', '/2025-05-22_03-30-35_454.webp', '/DSC01277.webp',
      '/hCydvjybRh-HUghO949Ufw.webp', '/portraits/DSC086614.webp'
    ]
  },
  {
    url: '/portraits',
    images: [
      '/portraits/DSC086282.webp', '/portraits/DSC06596.webp', '/portraits/DSC08371.webp',
      '/portraits/DSC05371 2.webp', '/portraits/2025-07-23_21-25-17_620.webp',
      'portraits/DSC084452.webp', '/portraits/2025-07-23_22-20-00_081.webp',
      '/portraits/DSC01354b.webp', '/portraits/DSC086614.webp', '/portraits/DSC07582.webp',
      '/portraits/DSC081532.webp', '/portraits/DSC04666.webp', '/portraits/2026-04-25_15-38-23_300.webp',
      '/portraits/DSC07624.webp', '/portraits/DSC081563.webp',
      '/portraits/2025-07-20_13-51-57_305 (2025-12-13T09_10_51.635).webp',
      '/portraits/2025-07-21_00-41-47_938 (2025-12-13T09_07_35.015).webp'
    ]
  },
  {
    url: '/events',
    images: [
      '/events/DSC00970.webp', '/events/DSC00394.webp', '/events/DSC01007(1) 2.webp',
      '/events/DSC01001(1).webp', '/events/DSC00944.webp', '/events/DSC00882.webp',
      '/events/DSC00416.webp', '/events/DSC01765.webp'
    ]
  },
  {
    url: '/pets',
    images: [
      '/pets/2023-12-04_17-13-23_621.webp', '/pets/2023-12-04_16-52-14_336 (2023-12-17T13_14_31.240).webp',
      '/pets/DSC01004.webp', '/pets/DSC02058.webp', '/pets/DSC02123.webp',
      '/pets/DSC04153.webp', '/pets/DSC09913.webp', '/pets/DSC03490.webp',
      '/pets/DSC09920.webp', '/pets/DSC04995.webp', '/pets/CAS_0015.webp',
      '/pets/DSC04992.webp', '/pets/DSC02122 2.webp'
    ]
  },
  {
    url: '/wildlife',
    images: [
      '/wildlife/0F02335F-2265-4BEA-B388-0D6291B8E02E2025-07-24_15-20-27_118.webp',
      '/wildlife/2023-08-09_19-21-47_497.webp', '/wildlife/2023-08-15_15-18-38_847.webp',
      '/wildlife/2025-07-20_22-21-42_808.webp', '/wildlife/2025-07-21_00-41-13_804.webp',
      '/wildlife/2025-07-21_20-22-05_838.webp', '/wildlife/2025-07-21_21-35-31_496.webp',
      '/wildlife/2025-07-21_21-49-26_961.webp', '/wildlife/2025-07-22_00-13-32_078.webp',
      '/wildlife/2025-09-11_19-48-13_491.webp', '/wildlife/2025-09-12_10-19-42_002.webp',
      '/wildlife/23-08-11 17-31-06 8906.webp', '/wildlife/23-08-11 17-32-56 8960.webp',
      '/wildlife/45CEEFEA-5CE0-4B80-9E8E-E6671D36AA8C.webp',
      '/wildlife/51674A29-BD44-4231-82FB-833176A5B5322025-07-24_16-52-11_680 (2025-12-07T10_05_36.324).webp',
      '/wildlife/5A0ADCC3-EC67-4C3E-9B9A-84DBA06D5FA32025-07-21_21-26-02_636 (2025-12-13T09_02_49.793).webp',
      '/wildlife/712A0C40-E9CF-4784-9CEC-250893B8516EDSC08955.webp',
      '/wildlife/73065081-51C6-40CA-8551-8445DE16A06DDSC08912.webp',
      '/wildlife/7AEA06A4-31D9-4EF7-9250-BC90DA14FB50DSC07175.webp',
      '/wildlife/CAS_0418.webp', '/wildlife/CAS_0448.webp', '/wildlife/CAS_0495.webp', '/wildlife/CAS_0507.webp',
      '/wildlife/D78A08A4-6AA7-467D-9777-DA8CC5BF12BFDSC06664.webp',
      '/wildlife/DSC01170(1).webp', '/wildlife/DSC01224.webp', '/wildlife/DSC01229.webp',
      '/wildlife/DSC01435.webp', '/wildlife/DSC01440.webp', '/wildlife/DSC01964.webp',
      '/wildlife/DSC02139.webp', '/wildlife/DSC02320.webp', '/wildlife/DSC02427.webp',
      '/wildlife/DSC02328.webp', '/wildlife/DSC02509.webp', '/wildlife/DSC02824.webp',
      '/wildlife/DSC03101.webp', '/wildlife/DSC03417.webp', '/wildlife/DSC04431.webp',
      '/wildlife/DSC04803.webp', '/wildlife/DSC05011.webp', '/wildlife/DSC05427.webp',
      '/wildlife/DSC05434.webp', '/wildlife/DSC05897.webp', '/wildlife/DSC06062.webp',
      '/wildlife/DSC07517.webp', '/wildlife/DSC08172.webp', '/wildlife/DSC08201.webp',
      '/wildlife/DSC08319.webp', '/wildlife/DSC08388.webp', '/wildlife/DSC08629.webp',
      '/wildlife/DSC08636.webp', '/wildlife/DSC08682.webp', '/wildlife/DSC0E2177.webp',
      '/wildlife/E42053A0-FAE0-4E0A-9DF3-0484CD9340AC.webp',
      '/wildlife/F193C2C9-02D6-45D8-ACB8-600F5EED75CF2025-07-24_12-38-13_132.webp',
      '/wildlife/IMG_0316.webp', '/wildlife/owl.webp'
    ]
  },
  {
    url: '/landscapes',
    images: [
      '/landscapes/2023-08-12_17-10-21_419.webp', '/landscapes/2023-08-12_17-21-57_418.webp',
      '/landscapes/2023-08-12_18-18-25_343.webp', '/landscapes/2025-07-22_10-18-30_806.webp',
      '/2025-07-23_21-02-21_091.webp', '/landscapes/2025-09-11_19-39-21_733.webp',
      '/landscapes/C0A118B3-8543-455A-8688-D4D056F13704DSC07868.webp',
      '/landscapes/D5D8D35C-E227-46DA-9653-16C6219CCA3FDSC01500b Large.webp',
      '/landscapes/DSC00278.webp', '/landscapes/DSC00653.webp', '/landscapes/DSC06626.webp',
      '/landscapes/DSC03284.webp', '/landscapes/DSC03490.webp', '/landscapes/DSC04976.webp',
      '/landscapes/DSC05807 2.webp', '/landscapes/DSC05995.webp', '/landscapes/DSC06507.webp',
      '/landscapes/DSC08025.webp', '/landscapes/DSC08176.webp', '/landscapes/DSC09558.webp'
    ]
  },
  {
    url: '/architecture',
    images: [
      '/Architecture/23-08-13 10-50-37 0722.webp', '/Architecture/DSC00323.webp',
      '/Architecture/DSC03332.webp', '/Architecture/DSC04725 Large.webp',
      '/hCydvjybRh-HUghO949Ufw.webp', '/Architecture/DSC02456.webp',
      '/Architecture/DSC08754 3.webp', '/Architecture/July 22 CAS_0984(1).webp'
    ]
  },
  {
    url: '/astrophotography',
    images: [
      '/astrophotography/2025-05-22_03-30-35_454.webp', '/astrophotography/23-08-14 23-09-40 0690.webp',
      '/astrophotography/294518D8-40EC-4C93-B49D-5A4BF14A0BD5DSC00146b.webp',
      '/astrophotography/2A5F4959-4464-4343-B76B-69D393E8F9D12024-08-10_21-26-04_924.webp',
      '/astrophotography/DSC03667.webp', '/astrophotography/02D171D5-53B9-4A93-933B-8C2A38049169.webp',
      '/astrophotography/StarStaX_DSC03647b-DSC03706_lighten.webp',
      '/astrophotography/2024-08-31_21-26-16_900.webp'
    ]
  },
  { url: '/about', images: [] },
  { url: '/privacy-policy', images: [] },
  { url: '/sitemap', images: [] },
];

const urlEncode = (str: string) =>
  encodeURI(str).replace(/\(/g, '%28').replace(/\)/g, '%29');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages.map(page => `
  <url>
    <loc>${site}${page.url}</loc>
    ${page.images.map(img => {
      const normalized = img.startsWith('/') ? img : `/${img}`;
      return `
    <image:image>
      <image:loc>${site}${urlEncode(normalized)}</image:loc>
    </image:image>`;
    }).join('')}
  </url>`).join('')}
</urlset>`;

export const GET: APIRoute = () => {
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};