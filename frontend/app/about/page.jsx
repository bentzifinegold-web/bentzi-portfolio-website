'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{backgroundColor: '#1a1a18'}}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-stretch"
      >
        {/* Text side */}
        <div className="flex-1 px-8 py-12">
          <h1 className="text-sm font-bold uppercase tracking-widest mb-12" style={{color: '#6a6a5a'}}>About</h1>
          <div className="space-y-8 text-xl leading-relaxed" style={{color: '#b8b4ac'}}>
            <p>
              I'm Bentzi, an Industrial Design student at Lehigh University with a strong eye for design. I know what I like and what I don't, but I'm always down to learn more. I love working with my hands just as much as working digitally, whether that's a sketch, a CAD model, or something built in the garage. I care about clean, honest forms and try to bring that same thinking into everything I make, from a grip tool for climbers to a speaker I built from scratch. When I'm not designing, I'm probably making music, listening to an audiobook, or out sailing.
            </p>
          </div>
        </div>

        {/* Photo side — flush to right edge, vertically padded to match text */}
        <div className="flex-1 py-12 pr-0 flex">
          <img
            src="/images/IMG_0554.png"
            alt="Bentzi Finegold"
            className="w-full object-cover object-top"
          />
        </div>
      </motion.div>
    </main>
  )
}
