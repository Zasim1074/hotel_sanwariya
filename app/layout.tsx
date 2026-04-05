import type { Metadata } from "next";
import "../styles/globals.css";
import Footer from "@/components/layout/Footer";
import { Noto_Serif, Noto_Sans } from "next/font/google";
import { phone1 } from "@/data/contacts";
import Header from "@/components/layout/header";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-heading",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hotel-sanwariya.com"),
  title: {
    default: "Hotel Sanwariya | Best Hotel in Mahalaxmi Nagar, Indore",
    template: "%s | Hotel Sanwariya",
  },
  description:
    "Affordable and comfortable hotel in Mahalaxmi Nagar, Indore. Book rooms instantly with call or WhatsApp support.",
  keywords: [
    "hotel in indore",
    "hotel in mahalaxmi nagar",
    "budget hotel indore",
    "room booking indore",
    "hotel booking indore",
    "family hotel indore",
  ],
  authors: [
    { name: "Hotel Sanwariya", url: "https://hotel-sanwariya.com" },
  ],
  creator: "Hotel Sanwariya",
  publisher: "Hotel Sanwariya",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: "Hotel Sanwariya | Best Hotel in Mahalaxmi Nagar, Indore",
    description:
      "Affordable and comfortable hotel in Mahalaxmi Nagar, Indore. Book rooms instantly with call or WhatsApp support.",
    type: "website",
    url: "https://hotel-sanwariya.com",
    siteName: "Hotel Sanwariya",
    locale: "en_IN",
    images: [
      {
        url: "/Images/home/h1_hero.jpg",
        alt: "Hotel Sanwariya hero image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Sanwariya | Best Hotel in Mahalaxmi Nagar, Indore",
    description:
      "Affordable and comfortable hotel in Mahalaxmi Nagar, Indore. Book rooms instantly with call or WhatsApp support.",
    creator: "@HotelSanwariya",
    images: ["/Images/home/h1_hero.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": "https://yourdomain.com/#hotel", // change here
    name: "Hotel Sanwariya",
    description:
      "Affordable and comfortable hotel stay in Mahalaxmi Nagar, Indore. Ideal for families and travelers with quick booking support.",
    url: "https://yourdomain.com", // change here
    telephone: `+${phone1}`,
    priceRange: "₹5000 - ₹2000",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Opposite Milk Dairy and Bhandar, 60 Feet Road, Mahalaxmi Nagar",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      postalCode: "452010",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.7",
      longitude: "75.9",
    },

    image: [
      "https://yourdomain.com/hero.png", // change here
      "https://yourdomain.com/room.png", // change here
    ],

    checkinTime: "12:00",
    checkoutTime: "11:00",

    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Free WiFi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Air Conditioning",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Room Service",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "24/7 Water Supply",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "CCTV Security",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Power Backup",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Conference Room",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Meeting Room",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Easy access to Connectivties",
        value: true,
      },
    ],

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.3",
      reviewCount: "50",
    },
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(hotelSchema),
          }}
        />
      </head>
      <body
        className={`${notoSans.variable} ${notoSerif.variable} min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
