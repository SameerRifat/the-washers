import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import WhatsappChat from '@/components/WhatsappChat'
import { Toaster } from "react-hot-toast";

// google-site-verification=YuE9KV1YxzvTz6BrSYndCPXHfWfrrgkUK_ihfdXXLoc

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TheWashers UAE | Premier Cleaning Services in Dubai',
  description: 'Discover unrivaled cleaning services at TheWashers UAE. Our expert team ensures pristine cleanliness in [Your City] homes and businesses. Schedule your appointment for a spotless space today!',
}
// export const metadata = {
//   title: 'thewashersuae - cleaning service in Dubai',
//   description: 'Best Sofa Cleaning Service in Dubai',
// }

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
