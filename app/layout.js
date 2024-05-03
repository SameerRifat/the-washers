import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import WhatsappChat from '@/components/WhatsappChat'
import { Toaster } from "react-hot-toast";

// google-site-verification=YuE9KV1YxzvTz6BrSYndCPXHfWfrrgkUK_ihfdXXLoc

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://thewashersuae.com/'),
  title: "TheWashers UAE | Sofa Cleaning Services in Dubai, Sharjah, Ajman",
  description: 'Get top-notch cleaning services at TheWashers UAE! Our expert team guarantees spotless and pristine results for your home or business in Dubai, Sharjah, and Ajman. Book your appointment today and enjoy a sparkling clean space!',
  keywords: [
    "sofa cleaning dubai",
    "sofa cleaning services in dubai",
    "sofa cleaning sharjah",
    "sofa cleaning ajman",
    "sofa cleaning service in dubai",
    "sofa carpet cleaning dubai",
    "sofa and carpet cleaning dubai",
    "dubai sofa cleaning",
    "leather sofa cleaning dubai",
    "sofa shampooing dubai",
    "sofa washing dubai",
    "sofa cleaning uae",
    "sofa cleaning service dubai",
    "sofa dry cleaning dubai",
    "sofa steam cleaning dubai",
    "professional sofa cleaning dubai",
    "sofa cleaning companies in dubai",
    "sofa cleaning services sharjah",
    "sofa deep cleaning services",
    "mattress cleaning dubai cost",
    "furniture deep cleaning dubai",
    "sofa and carpet cleaning services",
    "sofa cleaning service",
    "sofa cleaner dubai",
    "carpet and sofa cleaning dubai",
    "sofa bed cleaning service",
    "sofa cleaning services in sharjah",
    "sofa cleaning services ajman",
    "sofa cleaning price",
    "best sofa cleaning services in dubai",
    "professional sofa cleaning service",
    "sofa deep cleaning dubai",
    "deep sofa cleaning dubai",
    "furniture cleaning services in dubai",
    "sofa and rug cleaning",
    "sofa cleaning near me",
    "home furniture cleaning",
    "mattress cleaning service in dubai",
    "upholstery cleaning services dubai",
    "sofa cleaning home service",
    "sofa shampoo service",
    "sofa steam cleaning",
    "sofa cleaning agency",
    "sofa cleaning service price",
    "sofa cleaners in dubai",
    "sofa wash service",
    "sofa deep cleaning sharjah",
    "professional sofa cleaner",
    "sofa cleaners dubai",
    "sofa and carpet cleaners",
    "sofa washing services",
    "sofa cleaning services at home",
    "sofa shampooing services",
    "sofa shampooing sharjah",
    "sofa washing sharjah",
    "sofa clean dubai",
    "sofa cleaning dubai offers",
    "cleaning sofa dubai",
    "cleaning sofa services",
    "sofa shampoo cleaning services",
    "deep sofa cleaning",
    "clean sofa dubai",
    "deep cleaning sofa service",
    "cleaning services for sofa",
    "sofa cleaning carpet cleaning",
    "sofa shampoo dubai",
    "sofa dry cleaning",
    "sofa bed cleaner",
    "sofa washing",
    "sofa dry clean",
    "sofa wash",
    "sofa shampooing",
    "couch cleaning dubai",
    "fabric fresh sofa dry cleaning services",
    "couch cleaning services",
    "sofa cleaning services",
    "sofa cleaning company",
    "best sofa cleaning services",
    "sofa cleaner",
    "couch cleaning service",
    "sofa deep cleaning",
    "cushion cleaning service",
    "mattress cleaning services dubai",
    "mattress cleaning sharjah",
    "home sofa cleaning",
    "mattress clean service",
    "bed deep cleaning services",
    "bed mattress cleaning services",
    "carpet cleaning in sharjah",
    "carpet sofa cleaning services",
    "rug cleaning dubai",
    "rug cleaner dubai",
    "carpet cleaning sharjah",
    "carpet and sofa cleaning services",
    "clean mattress service",
    "bed washing service",
    "furniture washing",
    "furniture deep cleaning",
    "furniture cleaning services",
    "home sanitization sharjah",
    "home sanitization services sharjah",
    "deep cleaning and sofa cleaning dubai",
    "best sofa cleaning services in abu dhabi",
    "professional carpet cleaning services in sharjah",
    "leather sofa cleaning company near me",
    "upholstery cleaning dubai",
    "sofa and curtain cleaning",
    "dry cleaning of sofa at home",
    "leather sofa clean in dubai",
    "sofa and mattress cleaning dubai",
    "sofa carpet mattress curtains cleaning in dubai",
    "sofas cleaning",
  ],
  openGraph: {
    title: "TheWashers UAE | Sofa Cleaning Services in Dubai, Sharjah, Ajman",
    description: 'Get top-notch cleaning services at TheWashers UAE! Our expert team guarantees spotless and pristine results for your home or business in Dubai, Sharjah, and Ajman. Book your appointment today and enjoy a sparkling clean space!',
    images: [
      {
        url: "/mediumScreeenBanner4.jpg",
        width: 800,
        height: 600,
        alt: "TheWashers UAE"
      },
      {
        url: "/rugsCleaningBanner2.jpg",
        width: 800,
        height: 600,
        alt: "TheWashers UAE"
      },
    ],
    type: "website",
    url: "https://thewashersuae.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <WhatsappChat />
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
