import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  keywords = [], 
  ogImage = '/assets/og-image.jpg',
  ogType = 'website',
  canonicalUrl
}) {
  // Construct the full title with company name
  const fullTitle = title ? `${title} | Maruti Solutions` : 'Maruti Solutions - AI & Software Development Services';
  
  // Default description if none provided
  const metaDescription = description || 'Maruti Solutions provides cutting-edge AI solutions, custom software development, and digital transformation services for businesses across India.';
  
  // Construct canonical URL
  const siteUrl = 'https://marutisolutions.com';
  const canonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Additional SEO-friendly tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Maruti Solutions" />
    </Helmet>
  );
}