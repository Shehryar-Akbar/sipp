// app/lib/metadata.js

const SITE_URL = 'https://yourwebsite.com';
const SITE_NAME = 'Your Company Name';
const TWITTER_HANDLE = '@yourhandle';
const DEFAULT_OG_IMAGE = '/images/og-image.jpg'; // Single OG image for all pages

export function generatePageMetadata({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = 'website',
  noindex = false,
}) {
  const fullCanonicalUrl = `${SITE_URL}${canonicalUrl}`;
  const ogImageUrl = `${SITE_URL}${DEFAULT_OG_IMAGE}`;

  return {
    title,
    description,
    keywords: keywords.split(', '),
    
    ...(noindex && { robots: { index: false, follow: false } }),
    
    alternates: {
      canonical: fullCanonicalUrl,
    },
    
    openGraph: {
      siteName: SITE_NAME,
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
    
    twitter: {
      card: 'summary_large_image',
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title,
      description,
      images: [ogImageUrl],
    },
  };
}