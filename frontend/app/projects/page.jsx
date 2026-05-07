'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const defaultProjects = [
  {
    id: 1,
    title: 'Playback',
    year: '2025',
    subtitle: 'Kinetic Speaker Replica',
    images: ['/images/landscape.png'],
  },
  {
    id: 2,
    title: 'Ascent',
    year: '2025',
    subtitle: 'Climbing Hand Stretcher',
    images: ['/images/IMG_8330.jpg'],
  },
  {
    id: 3,
    title: 'No Direction',
    year: '2025',
    subtitle: 'Family Heirloom Compass',
    images: ['/images/No direction.jpg'],
  },
  {
    id: 4,
    title: 'Stool',
    year: '2026',
    subtitle: 'Sculptural Shelving Stool',
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
          <div className="absolute inset-0 transition-all duration-500 flex items-end group-hover:bg-black/25">
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

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-8 py-12" style={{backgroundColor: '#1a1a18'}}>
      <div className="grid grid-cols-2 gap-8">
        {defaultProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} idx={idx} />
        ))}
        <PhotographyCard />
      </div>
    </main>
  )
}
