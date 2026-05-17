import { useEffect } from 'react';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  author?: string;
  structuredData?: Record<string, any>;
}

export function useSEO(config: SEOConfig) {
  useEffect(() => {
    // Set title
    document.title = config.title;

    // Set meta tags
    const setMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.name = name;
        document.head.appendChild(element);
      }
      element.content = content;
    };

    const setProperty = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Standard meta tags
    setMeta('description', config.description);
    setMeta('keywords', config.keywords.join(', '));
    if (config.author) setMeta('author', config.author);

    // Open Graph
    setProperty('og:title', config.ogTitle || config.title);
    setProperty('og:description', config.ogDescription || config.description);
    setProperty('og:type', config.ogType || 'website');
    if (config.ogImage) setProperty('og:image', config.ogImage);
    setProperty('og:url', window.location.href);

    // Twitter
    if (config.twitterCard) {
      setMeta('twitter:card', config.twitterCard);
      setMeta('twitter:title', config.ogTitle || config.title);
      setMeta('twitter:description', config.ogDescription || config.description);
      if (config.ogImage) setMeta('twitter:image', config.ogImage);
    }

    // Canonical URL
    if (config.canonical) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = config.canonical;
    }

    // Structured Data (JSON-LD)
    if (config.structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(config.structuredData);
    }

    return () => {
      // Cleanup is optional - meta tags can persist
    };
  }, [config]);
}

// Common structured data schemas
export const schemas = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AI Funnel Guide',
    url: 'https://aifunnelguide.com',
    logo: 'https://aifunnelguide.com/logo.png',
    description: 'Independent guide to AI-powered marketing automation tools',
    sameAs: [
      'https://twitter.com/aifunnelguide',
      'https://linkedin.com/company/aifunnelguide',
    ],
  },

  webpage: (title: string, description: string) => ({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: window.location.href,
    publisher: {
      '@type': 'Organization',
      name: 'AI Funnel Guide',
      logo: {
        '@type': 'ImageObject',
        url: 'https://aifunnelguide.com/logo.png',
      },
    },
  }),

  faq: (faqs: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }),

  product: (name: string, description: string, price: string, image: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    image: image,
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
  }),

  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),
};
