import "../styles/globals.css"
import type { ReactNode } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata = {
  title: "Dr. Atsede Maru Dessie | PhD in Teaching Amharic",
  description:
    "Official academic portfolio of Dr. Atsede Maru Dessie — Lecturer, Researcher, and Amharic Language Educator at Bahir Dar University with 25+ years of experience.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen" style={{ fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: '#F8F7F4' }}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
