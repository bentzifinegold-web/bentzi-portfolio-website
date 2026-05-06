import './globals.css'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'

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
      <body className={`${montserrat.className}`} style={{backgroundColor: '#1a1a18', color: '#e8e4dc'}}>
        <header style={{borderBottom: '1px solid rgba(255,255,255,0.08)', backgroundColor: '#1a1a18'}}>
          <div className="px-8 py-8">
            <div className="mb-8">
              <Link href="/" className="hover:opacity-70 transition-opacity">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight" style={{color: '#e8e4dc'}}>BENTZI FINEGOLD · PRODUCT DESIGNER</h1>
              </Link>
            </div>
            <nav className="flex gap-8 pt-6 flex-wrap" style={{borderTop: '1px solid rgba(255,255,255,0.08)'}}>
              <a href="/projects" className="text-sm font-bold uppercase tracking-wide pb-2 transition-colors hover:opacity-60" style={{color: '#6a6a5a'}}>
                Projects
              </a>
              <a href="/about" className="text-sm font-bold uppercase tracking-wide pb-2 transition-colors hover:opacity-60" style={{color: '#6a6a5a'}}>
                About
              </a>
              <a href="/contact" className="text-sm font-bold uppercase tracking-wide pb-2 transition-colors hover:opacity-60" style={{color: '#6a6a5a'}}>
                Contact
              </a>
              <div className="ml-auto flex gap-6">
                <a href="https://www.linkedin.com/in/bentzi-finegold-9004481b1/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-wide pb-2 transition-colors hover:opacity-60" style={{color: '#6a6a5a'}}>
                  LinkedIn ↗
                </a>
              </div>
            </nav>
          </div>
        </header>
        {children}
        <footer className="mt-20" style={{borderTop: '1px solid rgba(255,255,255,0.08)'}}>
          <div className="px-8 py-12 text-center text-sm" style={{color: '#6a6a5a'}}>
            <p>&copy; 2025 Bentzi Finegold. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
