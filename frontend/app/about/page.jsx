'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="min-h-screen px-8 py-12" style={{backgroundColor: '#1a1a18'}}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-sm font-bold uppercase tracking-widest mb-12" style={{color: '#6a6a5a'}}>About</h1>
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          <div className="w-full md:w-64 flex-shrink-0">
            <img
              src="/images/Headshot.JPG"
              alt="Bentzi Finegold"
              className="w-full object-cover"
              style={{aspectRatio: '3/4'}}
            />
          </div>
          <div className="space-y-8 text-xl leading-relaxed" style={{color: '#b8b4ac'}}>
            <p>
              Bentzi Finegold is a designer and maker focused on innovative product design, material experimentation, and kinetic sculptures. Each project begins with a question about how materials can move, interact, and serve function in unexpected ways.
            </p>
            <p>
              With expertise spanning analog hand-crafting to digital fabrication, the work combines precision engineering with artistic vision — resulting in pieces that are both beautiful and functional.
            </p>
            <p>
              Whether exploring the kinetic possibilities of chipboard or creating family heirlooms, the focus remains on thoughtful design that respects materials and considers the user's interaction with the object.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
