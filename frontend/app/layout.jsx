import './globals.css'

export const metadata = {
  title: 'Bentzi Finegold - Design Portfolio',
  description: 'Innovative handcrafted design projects showcasing unique material manipulation and product design',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
        <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 sticky top-0 z-40">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Bentzi Finegold
            </div>
            <div className="flex gap-8">
              <a href="#projects" className="text-sm font-medium hover:text-cyan-400 transition-colors">
                Projects
              </a>
              <a href="#about" className="text-sm font-medium hover:text-cyan-400 transition-colors">
                About
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-cyan-400 transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </header>
        {children}
        <footer className="border-t border-slate-700/50 bg-slate-900/50 mt-20">
          <div className="max-w-6xl mx-auto px-6 py-12 text-center text-sm text-slate-400">
            <p>&copy; 2025 Bentzi Finegold. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
