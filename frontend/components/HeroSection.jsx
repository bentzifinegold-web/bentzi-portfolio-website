import { motion } from 'framer-motion'

export default function HeroSection() {
  const words = ['Designer', 'Maker', 'Innovator']
  const [currentWord, setCurrentWord] = require('react').useState(0)

  return (
    <section className="max-w-6xl mx-auto px-6 py-32 md:py-48">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Bentzi Finegold
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl text-slate-400"
          >
            <span className="gradient-text text-3xl md:text-4xl font-bold">
              Product Designer & Craftsperson
            </span>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
        >
          Exploring the intersection of material, form, and function through innovative design and meticulous craftsmanship. Each project is a journey into how objects can move, serve, and inspire.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap gap-4 pt-8"
        >
          <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all cursor-pointer">
            View Work
          </a>
          <a href="#about" className="px-6 py-3 border border-slate-400 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-colors cursor-pointer">
            Learn More
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-20 h-96 rounded-2xl overflow-hidden glass group cursor-pointer"
      >
        <a href="/photography" className="w-full h-full relative block">
          <img
            src="/images/hero-image.jpg.jpg"
            alt="Photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 flex items-center justify-center transition-all duration-300">
            <p className="text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Photography
            </p>
          </div>
        </a>
      </motion.div>
    </section>
  )
}
