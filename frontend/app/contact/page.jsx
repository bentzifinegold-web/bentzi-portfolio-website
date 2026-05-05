'use client'

import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <main className="min-h-screen px-8 py-12" style={{backgroundColor: '#1a1a18'}}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-sm font-bold uppercase tracking-widest mb-12" style={{color: '#6a6a5a'}}>Contact</h1>

        <a
          href="mailto:bentzifinegold@gmail.com"
          className="block text-4xl md:text-5xl font-bold uppercase tracking-tight transition-opacity hover:opacity-60 mb-12"
          style={{color: '#e8e4dc'}}
        >
          bentzifinegold@gmail.com
        </a>

        <div style={{borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '3rem'}}>
          <a
            href="https://www.linkedin.com/in/bentzi-finegold-9004481b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-60"
            style={{color: '#6a6a5a'}}
          >
            LinkedIn ↗
          </a>
        </div>
      </motion.div>
    </main>
  )
}
