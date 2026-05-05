'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const defaultProjects = [
  {
    id: 1,
    title: 'Playback',
    year: '2025',
    subtitle: 'Kinetic Speaker Replica',
    description: 'Playback is a chipboard replica made entirely of analog cuts, material manipulation and white glue of The Dewalt Jobsite Pro Wearable Speaker with a 2% material deviation of a sewing needle which serves the design by allowing the clip to swing open. This project uses an exoskeleton design to keep it all in place while allowing for pliability of the design. Additionally, it has a functional clip that can clip onto clothing or baggage.',
    materials: ['Chipboard', 'White Glue', 'Sewing Needle'],
    dimensions: '3.1" × 2" × 0.9"',
    techniques: ['Analog Cuts', 'Material Manipulation', 'Kinetic Design'],
    links: [
      { label: 'Demo 1', url: 'https://www.youtube.com/shorts/s4npu5u-g-I' },
      { label: 'Demo 2', url: 'https://www.youtube.com/shorts/BZvLM3h1ZbQ' },
    ],
    images: [
      '/images/playback1.png',
      '/images/playback2.png',
      '/images/playback3.png',
    ],
  },
  {
    id: 2,
    title: 'Ascent',
    year: '2025',
    subtitle: 'Climbing Hand Stretcher',
    description: 'Ascent is a chipboard climbing hand stretcher, designed and manufactured using digital technology. It is designed for rock climbers to stretch their hands and recoup their grip strength.',
    materials: ['Chipboard', 'Digital Manufacturing'],
    techniques: ['Digital Design', 'CNC Fabrication', 'Ergonomic Engineering'],
    links: [
      { label: 'View Project', url: 'https://drive.google.com/file/d/1Jaz2Saor1XhdvinMiZkwEgT8Z1YsZcKn/view?usp=share_link' },
    ],
    images: [
      '/images/IMG_8330.jpg',
      '/images/IMG_8331.jpg',
      '/images/IMG_8351.jpg',
      '/images/IMG_8362.jpg',
    ],
  },
  {
    id: 3,
    title: 'No Direction',
    year: '2024',
    subtitle: 'Family Heirloom Compass',
    description: 'No Direction is a wooden compass made of poplar, acrylic, felt, and metal. The thought is that as generations of the Finegold family continue they can keep this compass with them to remind them to be grounded in these virtues.',
    materials: ['Poplar Wood', 'Acrylic', 'Felt', 'Metal'],
    techniques: ['Wood Working', 'Hand Crafting', 'Mixed Media'],
    images: [
      '/images/No direction.jpg',
      '/images/No direction1.jpg',
      '/images/Nodirection2.jpg',
    ],
  },
]

function ProjectCard({ project, className = '', imageHeight = 'h-[500px]' }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="group cursor-pointer"
      >
        <div className={`relative ${imageHeight} overflow-hidden bg-gray-200 ${className}`}>
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end">
            <div className="p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-white text-sm font-bold uppercase tracking-wide">{project.subtitle}</p>
            </div>
          </div>
        </div>
        <div className="pt-4 pb-8 space-y-1">
          <h3 className="text-base font-bold uppercase tracking-wide" style={{color: '#e8e4dc'}}>{project.title}</h3>
          <p className="text-sm uppercase tracking-wide" style={{color: '#6a6a5a'}}>{project.year}</p>
        </div>
      </motion.div>
    </Link>
  )
}

function PhotographyCard() {
  return (
    <Link href="/photography">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="group cursor-pointer"
      >
        <div className="relative h-[500px] overflow-hidden bg-gray-200">
          <img
            src="/images/hero-image.jpg.jpg"
            alt="Photography"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end">
            <div className="p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-white text-sm font-bold uppercase tracking-wide">Landscape & Nature</p>
            </div>
          </div>
        </div>
        <div className="pt-4 pb-8 space-y-1">
          <h3 className="text-base font-bold uppercase tracking-wide" style={{color: '#e8e4dc'}}>Photography</h3>
          <p className="text-sm uppercase tracking-wide" style={{color: '#6a6a5a'}}>Ongoing</p>
        </div>
      </motion.div>
    </Link>
  )
}

export default function Home() {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(e.target.getAttribute('href'))
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  return (
    <main className="min-h-screen" style={{backgroundColor: '#1a1a18'}}>
      <section className="px-8 pt-12 pb-20">

        {/* Featured hero project — full width */}
        <div className="mb-2">
          <Link href="/projects/1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[70vh] overflow-hidden bg-gray-200">
                <img
                  src={defaultProjects[0].images[0]}
                  alt={defaultProjects[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500 flex items-end">
                  <div className="p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white text-sm font-bold uppercase tracking-wide">{defaultProjects[0].subtitle}</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 pb-10 flex items-baseline gap-4">
                <h3 className="text-base font-bold uppercase tracking-wide">{defaultProjects[0].title}</h3>
                <span className="text-sm uppercase tracking-wide" style={{color: '#6a6a5a'}}>{defaultProjects[0].year}</span>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Second row — 2/3 + 1/3 layout */}
        <div className="grid grid-cols-3 gap-6 mb-2">
          <div className="col-span-2">
            <ProjectCard project={defaultProjects[1]} imageHeight="h-[500px]" />
          </div>
          <div className="col-span-1">
            <ProjectCard project={defaultProjects[2]} imageHeight="h-[500px]" />
          </div>
        </div>

        {/* Third row — 1/3 + 2/3 layout with Photography */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1">
            <PhotographyCard />
          </div>
          <div className="col-span-2 h-[500px] flex items-center justify-center" style={{border: '1px solid rgba(255,255,255,0.06)'}}>
            <p className="text-sm uppercase tracking-widest" style={{color: '#4a4a3a'}}>More Projects Coming Soon</p>
          </div>
        </div>

      </section>

      {/* About */}
      <section id="about" className="px-8 py-20" style={{borderTop: '1px solid rgba(255,255,255,0.08)'}}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest mb-8" style={{color: '#6a6a5a'}}>About</h2>
          <div className="space-y-6 text-lg leading-relaxed" style={{color: '#b8b4ac'}}>
            <p>Bentzi Finegold is a designer and maker focused on innovative product design, material experimentation, and kinetic sculptures. Each project begins with a question about how materials can move, interact, and serve function in unexpected ways.</p>
            <p>With expertise spanning analog hand-crafting to digital fabrication, the work combines precision engineering with artistic vision — resulting in pieces that are both beautiful and functional.</p>
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-20" style={{borderTop: '1px solid rgba(255,255,255,0.08)'}}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest mb-8" style={{color: '#6a6a5a'}}>Contact</h2>
          <a href="mailto:bentzifinegold@gmail.com" className="text-2xl font-bold uppercase tracking-wide transition-colors" style={{color: '#e8e4dc'}}>
            bentzifinegold@gmail.com
          </a>
          <div className="mt-8">
            <a href="https://www.linkedin.com/in/bentzi-finegold-9004481b1/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors">
              LinkedIn ↗
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
