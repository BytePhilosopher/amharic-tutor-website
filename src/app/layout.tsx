import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata = {
  title: "Amharic Tutor Portfolio",
  description: "Learn Amharic with a personal tutor",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
