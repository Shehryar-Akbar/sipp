// app/robots.js
// This file will automatically generate robots.txt at yoursite.com/robots.txt

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Add any paths you want to block
    },
    sitemap: 'https://yourwebsite.com/sitemap.xml',
  };
}

// Alternatively, you can still use a static file:
// Create public/robots.txt with the following content:
/*
User-agent: *
Allow: /

Sitemap: https://yourwebsite.com/sitemap.xml
*/