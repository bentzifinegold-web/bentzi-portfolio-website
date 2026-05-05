'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between px-8 py-12" style={{backgroundColor: '#1a1a18'}}>

      {/* Big name */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-black uppercase leading-none tracking-tighter"
          style={{
            fontSize: 'clamp(3rem, 12.5vw, 14rem)',
            color: '#e8e4dc',
            lineHeight: 0.9,
          }}
        >
          BENTZI<br />FINEGOLD
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-sm uppercase tracking-widest mt-8"
          style={{color: '#6a6a5a'}}
        >
          Product Designer & Craftsperson
        </motion.p>
      </div>

      {/* Bottom nav */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex gap-10 pt-12"
        style={{borderTop: '1px solid rgba(255,255,255,0.08)'}}
      >
        <Link href="/projects" className="text-sm font-bold uppercase tracking-widest transition-colors hover:opacity-60" style={{color: '#e8e4dc'}}>
          Projects
        </Link>
        <Link href="/about" className="text-sm font-bold uppercase tracking-widest transition-colors hover:opacity-60" style={{color: '#e8e4dc'}}>
          About
        </Link>
        <Link href="/contact" className="text-sm font-bold uppercase tracking-widest transition-colors hover:opacity-60" style={{color: '#e8e4dc'}}>
          Contact
        </Link>
      </motion.div>
    </main>
  )
}
