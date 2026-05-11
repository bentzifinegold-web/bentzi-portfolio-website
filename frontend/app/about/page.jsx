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
              I'm a product designer who loves turning ideas into real, usable products. I'm drawn to designs that feel clean, functional, and straightforward without being overcomplicated. Most of my work focuses on balancing aesthetics with practicality and figuring out how to make products feel natural to use.
            </p>
            <p>
              I tend to work fast and instinctively, which is great for generating ideas and pushing projects forward, although it also means I sometimes catch myself going back to fix the small details later. A big part of my process is learning through iteration, experimenting, refining, and improving things as I go.
            </p>
            <p>
              I'm especially interested in product design, branding, and the way thoughtful design can shape someone's experience with a product. Whether I'm working on packaging, inserts, or consumer products, I enjoy creating things that people actually connect with and enjoy using.
            </p>
            <p>
              Outside of design, I spend a lot of time paying attention to products, branding, and why certain things just feel well made. I like design that feels intentional, approachable, and a little understated.
            </p>
            <p>
              At the end of the day, I just enjoy building things, learning as I go, and getting a little better with every project.
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
