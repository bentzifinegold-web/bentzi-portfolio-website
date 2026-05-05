import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata = {
  title: 'Bentzi Finegold - Design Portfolio',
  description: 'Innovative handcrafted design projects showcasing unique material manipulation and product design',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-white text-black`}>
        <header className="border-b border-black/20 bg-transparent sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-8 py-8">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">BENTZI FINEGOLD</h1>
              <p className="text-lg text-gray-600">PRODUCT DESIGNER & CRAFTSPERSON</p>
            </div>
            <nav className="flex gap-8 border-t border-black/20 pt-6 flex-wrap">
              <a href="/" className="text-sm font-bold uppercase tracking-wide text-black hover:text-gray-600 transition-colors pb-2 border-b-2 border-black">
                Projects
              </a>
              <a href="#about" className="text-sm font-bold uppercase tracking-wide text-gray-400 hover:text-black transition-colors pb-2">
                About
              </a>
              <a href="#contact" className="text-sm font-bold uppercase tracking-wide text-gray-400 hover:text-black transition-colors pb-2">
                Contact
              </a>
              <div className="ml-auto flex gap-6">
                <a href="https://www.linkedin.com/in/bentzi-finegold-9004481b1/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-wide text-gray-400 hover:text-black transition-colors pb-2">
                  LinkedIn
                </a>
              </div>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-black/20 bg-transparent mt-20">
          <div className="max-w-7xl mx-auto px-8 py-12 text-center text-sm text-gray-600">
            <p>&copy; 2025 Bentzi Finegold. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
