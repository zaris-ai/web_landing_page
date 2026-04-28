import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import './globals.css';

const GA_MEASUREMENT_ID = 'G-STEXFS0SLQ';
const CLARITY_PROJECT_ID = 'winnxswq00';

export const metadata: Metadata = {
  title:
    'Arka: Smart Analyzer | Shopify analytics for customers, products, and sales trends',
  description:
    'Embedded Shopify analytics for customer segments, product performance, sales trends, funnel views, and store KPIs.',
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: '4CK9TdM_rI066svVGmKtplHH2TuumobFy4H_9Z-10AA',
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