'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{backgroundColor: '#1a1a18'}}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="block"
      >
        {/* Heading */}
        <div className="px-8 pt-12">
          <h1 className="text-sm font-bold uppercase tracking-widest mb-12" style={{color: '#6a6a5a'}}>About</h1>
        </div>

        {/* Text + Photo — both start and end at the same point */}
        <div className="flex items-stretch pb-12">
          <div className="flex-1 px-8">
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

          {/* Photo — flush to right edge, exactly as tall as the paragraphs */}
          <div className="flex-1">
            <img
              src="/images/IMG_0554.png"
              alt="Bentzi Finegold"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </motion.div>
    </main>
  )
}
