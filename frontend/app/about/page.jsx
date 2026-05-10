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
              Bentzi Finegold is a designer and maker focused on innovative product design, material experimentation, and kinetic sculptures. Each project begins with a question about how materials can move, interact, and serve function in unexpected ways.
            </p>
            <p>
              With expertise spanning analog hand-crafting to digital fabrication, the work combines precision engineering with artistic vision —<br />resulting in pieces that are both beautiful and functional.
            </p>
            <p>
              Whether exploring the kinetic possibilities of chipboard or creating family heirlooms, the focus remains on thoughtful design that respects materials and considers the user's interaction with the object.
            </p>
          </div>
        </div>

        {/* Photo side — flush to right edge, vertically padded to match text */}
        <div className="flex-1 py-12 pr-0 flex">
          <img
            src="/images/Headshot.JPG"
            alt="Bentzi Finegold"
            className="w-full object-cover object-top"
          />
        </div>
      </motion.div>
    </main>
  )
}
