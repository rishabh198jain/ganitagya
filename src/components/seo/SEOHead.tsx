import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Ganitagya - Free Online Math Learning Platform',
  description = 'Learn mathematics with free online tools, calculators, and comprehensive tutorials. Master algebra, geometry, calculus, and more with interactive lessons.',
  keywords = 'math learning, online calculator, algebra help, geometry tools, calculus tutorial, free math education, mathematics, trigonometry, statistics',
  image = '/images/ganitagya-og-image.jpg',
  url = 'https://ganitagya.com',
  type = 'website',
  author = 'Ganitagya Team',
  publishedTime,
  modifiedTime
}) => {
  const fullTitle = title.includes('Ganitagya') ? title : `${title} | Ganitagya`;
  const fullUrl = url.startsWith('http') ? url : `https://ganitagya.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://ganitagya.com${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Ganitagya" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@ganitagya" />
      <meta name="twitter:creator" content="@ganitagya" />

      {/* Article Meta Tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      <meta property="article:author" content={author} />
      <meta property="article:section" content="Education" />
      <meta property="article:tag" content="Mathematics" />
      <meta property="article:tag" content="Education" />
      <meta property="article:tag" content="Learning" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Ganitagya",
          "description": description,
          "url": "https://ganitagya.com",
          "logo": "https://ganitagya.com/images/logo.png",
          "sameAs": [
            "https://facebook.com/ganitagya",
            "https://twitter.com/ganitagya",
            "https://youtube.com/ganitagya",
            "https://instagram.com/ganitagya"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-MATH-HELP",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          }
        })}
      </script>

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#6366f1" />
      <meta name="msapplication-TileColor" content="#6366f1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Ganitagya" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://googleads.g.doubleclick.net" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
    </Helmet>
  );
};

export default SEOHead;
