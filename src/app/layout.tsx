import "../styles/globals.css"
export const metadata = {
  title: "Amharic Tutor Portfolio",
  description: "Learn Amharic with a personal tutor",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-sans">

        <main className="flex-grow">{children}</main>

      </body>
    </html>
  )
}
