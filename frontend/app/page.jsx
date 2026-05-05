'use client'

import { useEffect } from 'react'
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
    images: ['/images/playback1.png', '/images/playback2.png', '/images/playback3.png'],
  },
  {
    id: 2,
    title: 'Ascent',
    year: '2025',
    subtitle: 'Climbing Hand Stretcher',
    description: 'Ascent is a chipboard climbing hand stretcher, designed and manufactured using digital technology. It is designed for rock climbers to stretch their hands and recoup their grip strength. The precision digital design allows for optimal ergonomic support while maintaining the lightweight, durable properties of chipboard construction.',
    materials: ['Chipboard', 'Digital Manufacturing'],
    techniques: ['Digital Design', 'CNC Fabrication', 'Ergonomic Engineering'],
    links: [
      { label: 'View Project', url: 'https://drive.google.com/file/d/1Jaz2Saor1XhdvinMiZkwEgT8Z1YsZcKn/view?usp=share_link' },
    ],
    images: ['/images/IMG_8330.jpg', '/images/IMG_8331.jpg', '/images/IMG_8351.jpg', '/images/IMG_8362.jpg'],
  },
  {
    id: 3,
    title: 'No Direction',
    year: '2025',
    subtitle: 'Family Heirloom Compass',
    description: 'No Direction is a wooden compass made of poplar, acrylic, felt, and metal. The thought is that as generations of the Finegold family continue they can keep this compass with them to remind them to be grounded in these virtues. This heirloom piece represents family values and serves as a tangible reminder of what matters most.',
    materials: ['Poplar Wood', 'Acrylic', 'Felt', 'Metal'],
    techniques: ['Wood Working', 'Hand Crafting', 'Mixed Media'],
    images: ['/images/No direction.jpg', '/images/No direction1.jpg', '/images/Nodirection2.jpg'],
  },
  {
    id: 4,
    title: 'Stool',
    year: '2026',
    subtitle: 'Sculptural Shelving Stool',
    description: 'Stool is a sculptural shelving piece combining navy blue and white chipboard construction with geometric patterned shelves. The organic curved form creates a dynamic structure that is both functional and artistic, demonstrating advanced material manipulation and precision digital fabrication techniques.',
    materials: ['Chipboard', 'Paint', 'Patterned Paper'],
    techniques: ['Digital Design', 'CNC Fabrication', 'Mixed Media'],
    images: ['/images/stool.jpg'],
  },
]

function ProjectCard({ project, idx }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: idx * 0.1 }}
        viewport={{ once: true }}
        className="group cursor-pointer"
      >
        <div className="relative h-[420px] overflow-hidden mb-4" style={{backgroundColor: '#2a2a28'}}>
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 transition-all duration-500 flex items-end" style={{background: 'transparent'}}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.25)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <div className="p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              <p className="text-white text-xs font-bold uppercase tracking-widest">{project.subtitle}</p>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-bold uppercase tracking-wide" style={{color: '#e8e4dc'}}>{project.title}</h3>
          <p className="text-xs uppercase tracking-wide" style={{color: '#6a6a5a'}}>{project.year}</p>
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
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="group cursor-pointer"
      >
        <div className="relative h-[420px] overflow-hidden mb-4" style={{backgroundColor: '#2a2a28'}}>
          <img
            src="/images/hero-image.jpg.jpg"
            alt="Photography"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 transition-all duration-500 flex items-end group-hover:bg-black/25">
            <div className="p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              <p className="text-white text-xs font-bold uppercase tracking-widest">Landscape & Nature</p>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-bold uppercase tracking-wide" style={{color: '#e8e4dc'}}>Photography</h3>
          <p className="text-xs uppercase tracking-wide" style={{color: '#6a6a5a'}}>Ongoing</p>
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

      {/* Projects Grid — 2 columns, alternating offset */}
      <section className="px-8 pt-12 pb-20">
        <div className="grid grid-cols-2 gap-8">
          {defaultProjects.map((project, idx) => (
            <div key={project.id} className={idx % 2 !== 0 ? 'mt-24' : ''}>
              <ProjectCard project={project} idx={idx} />
            </div>
          ))}
          <div>
            <PhotographyCard />
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
          <h2 className="text-xs font-bold uppercase tracking-widest mb-8" style={{color: '#6a6a5a'}}>About</h2>
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
          <h2 className="text-xs font-bold uppercase tracking-widest mb-8" style={{color: '#6a6a5a'}}>Contact</h2>
          <a href="mailto:bentzifinegold@gmail.com" className="text-2xl font-bold uppercase tracking-wide transition-colors" style={{color: '#e8e4dc'}}>
            bentzifinegold@gmail.com
          </a>
          <div className="mt-8">
            <a href="https://www.linkedin.com/in/bentzi-finegold-9004481b1/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest transition-colors" style={{color: '#6a6a5a'}}>
              LinkedIn ↗
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
