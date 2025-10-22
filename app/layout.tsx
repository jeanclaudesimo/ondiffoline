import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://test.c-simweb.de'),
  title: {
    default: "Ondiffoline - Professionelle Reinigungsdienste | Ihr regionaler Fachspezialist",
    template: "%s | Ondiffoline"
  },
  description: "Ondiffoline - Ihr regionaler Fachspezialist für gewerbliche Reinigung. Büroreinigung, Gastronomie-Reinigung, Fensterreinigung & mehr. ☎ +49 178 1757330",
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
  keywords: [
    'Reinigungsdienst',
    'gewerbliche Reinigung',
    'Büroreinigung',
    'Gastronomie Reinigung',
    'Fensterreinigung',
    'Bauabschlussreinigung',
    'Unterhaltsreinigung',
    'Ondiffoline',
    'professionelle Reinigung',
    'Reinigungsfirma',
    'Gebäudereinigung',
  ],
  authors: [{ name: 'Ondiffoline' }],
  creator: 'Ondiffoline',
  publisher: 'Ondiffoline',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Ondiffoline - Professionelle Reinigungsdienste',
    description: 'Ihr regionaler Fachspezialist für gewerbliche Reinigung.',
    url: 'https://test.c-simweb.de',
    siteName: 'Ondiffoline',
    locale: 'de_DE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://test.c-simweb.de',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://test.c-simweb.de',
    name: 'Ondiffoline',
    description: 'Professionelle Reinigungsdienste für Gewerbe und Privat',
    url: 'https://test.c-simweb.de',
    telephone: '+491781757330',
    email: 'team@ondiffoline.de',
    priceRange: '$$',
    image: 'https://test.c-simweb.de/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'DE',
      addressLocality: 'Deutschland',
    },
    geo: {
      '@type': 'GeoCoordinates',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://twitter.com/ondiffoline',
      'https://instagram.com/ondiffoline',
      'https://facebook.com/ondiffoline',
      'https://linkedin.com/company/ondiffoline',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Deutschland',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Reinigungsdienste',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Büroreinigung',
            description: 'Professionelle Reinigung von Büroräumen und Verwaltungsgebäuden',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gastronomie-Reinigung',
            description: 'Spezialisierte Reinigung für Restaurants und Gastronomieeinrichtungen',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fensterreinigung',
            description: 'Professionelle Fensterreinigung für Gewerbe und Privat',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bauabschlussreinigung',
            description: 'Gründliche Reinigung nach Bau- und Renovierungsarbeiten',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Unterhaltsreinigung',
            description: 'Regelmäßige Unterhaltsreinigung für Gewerbeimmobilien',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
