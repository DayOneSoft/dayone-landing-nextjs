export const metadata = {
  title: "Our Upcoming Products - DayOneSoft",
  description: "Discover DayOneSoft's upcoming product suite: DayOne E-commerce, DayOne Eats, and DayOne Rides. Modern solutions for e-commerce, food delivery, and ride-sharing platforms.",
  keywords: "e-commerce platform, food delivery app, ride sharing software, multi-vendor marketplace, SaaS solutions, microservices architecture",
  openGraph: {
    title: "Our Upcoming Products - DayOneSoft",
    description: "Discover DayOneSoft's upcoming product suite: DayOne E-commerce, DayOne Eats, and DayOne Rides. Modern solutions for e-commerce, food delivery, and ride-sharing platforms.",
    url: "https://dayonesoft.com/products",
    siteName: "DayOneSoft",
    images: [
      {
        url: "https://dayonesoft.com/products-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DayOneSoft Upcoming Products - E-commerce, Food Delivery, Ride Sharing",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Upcoming Products - DayOneSoft",
    description: "Discover DayOneSoft's upcoming product suite: DayOne E-commerce, DayOne Eats, and DayOne Rides. Modern solutions for e-commerce, food delivery, and ride-sharing platforms.",
    images: ["https://dayonesoft.com/products-og-image.jpg"],
  },
};

export default function ProductsLayout({ children }) {
  return children;
}