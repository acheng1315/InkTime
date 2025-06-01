import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'InkTime - Connect with Artists',
  description: 'Book custom sketches from talented artists around the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <nav className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link href="/" className="flex items-center group">
                  <span className="text-2xl font-bold bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
                    InkTime
                  </span>
                </Link>
              </div>
              <div className="flex items-center space-x-6">
                <Link 
                  href="/artists" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:scale-105"
                >
                  Artists
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:scale-105"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  )
} 