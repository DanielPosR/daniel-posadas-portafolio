import { writeFileSync } from 'fs';

// Reemplaza con la URL de tu sitio
const baseUrl = 'https://danielposr.com';

// Lista de rutas de tu aplicación
const routes = [
  '/',
  // Agrega más rutas según la estructura de tu sitio
];

// Función para generar el contenido del sitemap
const generateSitemapContent = () => {
  return routes.map((route) => {
    return `  <url>\n    <loc>${baseUrl}${route}</loc>\n  </url>`;
  }).join('\n');
};

// Función para generar el archivo sitemap completo
const generateSitemap = () => {
  const sitemapContent = generateSitemapContent();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapContent}\n</urlset>`;

  // Guarda el sitemap en un archivo
  writeFileSync('./public/sitemap.xml', sitemap);

  console.log('Sitemap generado exitosamente.');
};

// Ejecuta la función para generar el sitemap
generateSitemap();
