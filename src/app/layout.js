import "./globals.css";

export const metadata = {
  title: {
    default: 'DayOneSoft - Modern Software Solutions',
    template: '%s | DayOneSoft'
  },
  description: 'DayOneSoft delivers cutting-edge software solutions with modern technology stack. We build scalable, efficient, and user-friendly applications for businesses of all sizes.',
  keywords: 'software development, web applications, mobile apps, Vue.js, Laravel, Flutter, modern technology, scalable solutions, e-commerce platform, food delivery app, ride sharing software, SaaS solutions, microservices architecture',
  authors: [{ name: 'DayOneSoft Team', url: 'https://dayonesoft.com' }],
  creator: 'DayOneSoft',
  publisher: 'DayOneSoft',
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
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://dayonesoft.com',
  },
  openGraph: {
    title: 'DayOneSoft - Modern Software Solutions',
    description: 'DayOneSoft delivers cutting-edge software solutions with modern technology stack. We build scalable, efficient, and user-friendly applications for businesses of all sizes.',
    url: 'https://dayonesoft.com',
    siteName: 'DayOneSoft',
    images: [
      {
        url: 'https://dayonesoft.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DayOneSoft - Modern Software Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DayOneSoft - Modern Software Solutions',
    description: 'DayOneSoft delivers cutting-edge software solutions with modern technology stack. We build scalable, efficient, and user-friendly applications for businesses of all sizes.',
    images: ['https://dayonesoft.com/og-image.jpg'],
    creator: '@dayonesoft',
    site: '@dayonesoft',
  },
  category: 'technology',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DayOneSoft",
              "url": "https://dayonesoft.com",
              "logo": "https://dayonesoft.com/logo.png",
              "description": "DayOneSoft delivers cutting-edge software solutions with modern technology stack. We build scalable, efficient, and user-friendly applications for businesses of all sizes.",
              "foundingDate": "2024",
              "industry": "Software Development",
              "serviceArea": "Worldwide",
              "services": [
                "Web Application Development",
                "Mobile App Development",
                "E-commerce Solutions",
                "SaaS Development",
                "Custom Software Development"
              ],
              "technology": ["Vue.js", "Laravel", "Flutter", "JavaScript", "PHP"],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "url": "https://dayonesoft.com/#contact"
              },
              "sameAs": [
                "https://twitter.com/dayonesoft",
                "https://linkedin.com/company/dayonesoft",
                "https://github.com/dayonesoft"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
