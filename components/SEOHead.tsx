import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  structuredData?: object;
  noindex?: boolean;
  siteName?: string;
}

const SEOHead: React.FC<SEOProps> = ({
  title = "Petiska & Gatão - Petiscos Naturais Artesanais para Cães e Gatos em Brasília",
  description = "Petiscos naturais artesanais para cães e gatos em Brasília. 100% natural, sem conservantes, feito com amor. Encontre em pet shops parceiros no DF.",
  keywords = [
    "petiscos naturais",
    "petiscos para cães",
    "petiscos para gatos", 
    "Brasília",
    "DF",
    "artesanal",
    "natural",
    "pet shop",
    "alimentação pet",
    "snacks pet"
  ],
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
  noindex = false,
  siteName = "Petiska & Gatão"
}) => {
  const baseUrl = "https://petiskaegatao.com.br";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Petiska & Gatão",
    "description": "Petiscos naturais artesanais para cães e gatos em Brasília",
    "url": baseUrl,
    "telephone": "+55-61-99999-9999",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brasília",
      "addressRegion": "DF",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-15.7801",
      "longitude": "-47.9292"
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 08:00-12:00"
    ],
    "priceRange": "$$",
    "servedCuisine": "Pet Food",
    "areaServed": {
      "@type": "City",
      "name": "Brasília"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Viewport and Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#FF6700" />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Petiska & Gatão" />
      <meta name="copyright" content="© 2024 Petiska & Gatão" />
      <meta name="language" content="pt-BR" />
      <meta name="distribution" content="local" />
      <meta name="rating" content="general" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
};

export default SEOHead;