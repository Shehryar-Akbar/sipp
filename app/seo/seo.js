// app/components/SEO.jsx
// Note: In App Router, we use metadata export instead of Head component

export function generateMetadata({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  noindex = false,
}) {
  const siteUrl = 'https://yourwebsite.com';
  const siteName = 'Your Company Name';
  const twitterHandle = '@yourhandle';
  
  const fullCanonicalUrl = canonicalUrl 
    ? `${siteUrl}${canonicalUrl}` 
    : siteUrl;
  
  const defaultOgImage = `${siteUrl}/images/og-default.jpg`;
  const ogImageUrl = ogImage ? `${siteUrl}${ogImage}` : defaultOgImage;

  return {
    title,
    description,
    keywords: keywords?.split(', '),
    
    // Robots
    ...(noindex && { robots: { index: false, follow: false } }),
    
    // Canonical
    alternates: {
      canonical: fullCanonicalUrl,
    },
    
    // Open Graph
    openGraph: {
      siteName,
      type: ogType,
      title,
      description,
      url: fullCanonicalUrl,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
    },
    
    // Twitter
    twitter: {
      card: twitterCard,
      site: twitterHandle,
      creator: twitterHandle,
      title,
      description,
      images: [ogImageUrl],
    }, 
  };
}