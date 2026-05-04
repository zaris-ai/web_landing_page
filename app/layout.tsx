import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import './globals.css';

const GA_MEASUREMENT_ID = 'G-STEXFS0SLQ';
const CLARITY_PROJECT_ID = 'winnxswq00';
const SITE_URL = 'https://web.arkaanalyzer.com';
const SHOPIFY_APP_URL = 'https://apps.shopify.com/arka-smart-analyzer';

const arkaBrandSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Arka: Smart Analyzer',
      legalName: 'Smart Store Analyzer',
      url: `${SITE_URL}/`,
      sameAs: [SHOPIFY_APP_URL],
      brand: {
        '@id': `${SITE_URL}/#brand`,
      },
    },
    {
      '@type': 'Brand',
      '@id': `${SITE_URL}/#brand`,
      name: 'Arka: Smart Analyzer',
      url: `${SITE_URL}/`,
      sameAs: [SHOPIFY_APP_URL],
      slogan:
        'Customer, product, and sales insight without exporting spreadsheets',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'Arka: Smart Analyzer',
      url: `${SITE_URL}/`,
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
      inLanguage: 'en',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#software-application`,
      name: 'Arka: Smart Analyzer',
      alternateName: 'Arka Smart Analyzer',
      url: `${SITE_URL}/`,
      sameAs: [SHOPIFY_APP_URL],
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Analytics',
      operatingSystem: 'Shopify',
      softwareRequirements: 'Shopify store',
      isAccessibleForFree: true,
      datePublished: '2026-03-19',
      inLanguage: 'en',
      description:
        'Arka: Smart Analyzer provides embedded Shopify analytics for customer segments, product performance, sales trends, funnel views, retention signals, and store KPIs without exporting spreadsheets.',
      featureList: [
        'Embedded Shopify analytics dashboard',
        'Customer segmentation',
        'Retention signals',
        'Product performance analytics',
        'Sales trend analysis',
        'Funnel views',
        'Store KPI dashboard',
        'Historical analysis',
        'Product tier breakdowns',
        'Bundle analysis',
        'Abandonment indicators',
        'Works with Shopify Checkout',
      ],
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: SHOPIFY_APP_URL,
      },
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
      provider: {
        '@id': `${SITE_URL}/#organization`,
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    'Arka: Smart Analyzer | Shopify analytics for customers, products, and sales trends',
  description:
    'Embedded Shopify analytics for customer segments, product performance, sales trends, funnel views, and store KPIs.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: '4CK9TdM_rI066svVGmKtplHH2TuumobFy4H_9Z-10AA',
  },
  openGraph: {
    title:
      'Arka: Smart Analyzer | Shopify analytics for customers, products, and sales trends',
    description:
      'Embedded Shopify analytics for customer segments, product performance, sales trends, funnel views, and store KPIs.',
    url: SITE_URL,
    siteName: 'Arka: Smart Analyzer',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Arka: Smart Analyzer | Shopify analytics for customers, products, and sales trends',
    description:
      'Embedded Shopify analytics for customer segments, product performance, sales trends, funnel views, and store KPIs.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(arkaBrandSchema).replace(/</g, '\\u003c'),
          }}
        />

        <Navigation />

        {children}

        <Footer />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
          `}
        </Script>
      </body>
    </html>
  );
}