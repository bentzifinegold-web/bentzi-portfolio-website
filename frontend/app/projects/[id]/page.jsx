'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const defaultProjects = [
  {
    id: 1,
    title: 'Playback',
    year: '2025',
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
    description: 'No Direction is a wooden compass made of poplar, acrylic, felt, and metal. The thought is that as generations of the Finegold family continue they can keep this compass with them to remind them to be grounded in these virtues. This heirloom piece represents family values and serves as a tangible reminder of what matters most.',
    materials: ['Poplar Wood', 'Acrylic', 'Felt', 'Metal'],
    techniques: ['Wood Working', 'Hand Crafting', 'Mixed Media'],
    images: ['/images/No direction.jpg', '/images/No direction1.jpg', '/images/Nodirection2.jpg'],
  },
  {
    id: 4,
    title: 'Stool',
    year: '2026',
    description: 'Stool is a sculptural shelving piece combining navy blue and white chipboard construction with geometric patterned shelves. The organic curved form creates a dynamic structure that is both functional and artistic, demonstrating advanced material manipulation and precision digital fabrication techniques.',
    materials: ['Chipboard', 'Paint', 'Patterned Paper'],
    techniques: ['Digital Design', 'CNC Fabrication', 'Mixed Media'],
    images: ['/images/stool.jpg'],
  },
]

export default function ProjectPage({ params }) {
  const projectId = parseInt(params.id)
  const project = defaultProjects.find((p) => p.id === projectId)
  const [imageIndex, setImageIndex] = useState(0)

  if (!project) {
    return (
      <main className="min-h-screen" style={{backgroundColor: '#1a1a18'}}>
        <section className="px-8 py-20">
          <Link href="/" className="text-sm font-bold uppercase tracking-wide mb-8 inline-block" style={{color: '#6a6a5a'}}>
            ← Back
          </Link>
          <h1 className="text-4xl font-bold" style={{color: '#e8e4dc'}}>Project not found</h1>
        </section>
      </main>
    )
  }

  const handlePrevImage = () => {
    setImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  return (
    <main className="min-h-screen" style={{backgroundColor: '#1a1a18'}}>
      <section className="px-8 py-16">
        <Link href="/" className="text-xs font-bold uppercase tracking-widest mb-12 inline-block transition-colors" style={{color: '#6a6a5a'}}>
          ← Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2" style={{color: '#e8e4dc'}}>{project.title}</h1>
            <p className="text-sm uppercase tracking-widest" style={{color: '#6a6a5a'}}>{project.year}</p>
          </div>

          {/* Main Image */}
          <div className="relative h-[60vh] overflow-hidden mb-4" style={{backgroundColor: '#2a2a28'}}>
            <motion.img
              key={imageIndex}
              src={project.images[imageIndex]}
              alt={`${project.title} - ${imageIndex + 1}`}
              className="w-full h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            {project.images.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <button onClick={handlePrevImage} className="p-3 rounded-full transition-colors" style={{backgroundColor: 'rgba(0,0,0,0.5)', color: '#e8e4dc'}}>←</button>
                <button onClick={handleNextImage} className="p-3 rounded-full transition-colors" style={{backgroundColor: 'rgba(0,0,0,0.5)', color: '#e8e4dc'}}>→</button>
              </div>
            )}
            <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs" style={{backgroundColor: 'rgba(0,0,0,0.5)', color: '#e8e4dc'}}>
              {imageIndex + 1} / {project.images.length}
            </div>
          </div>

          {/* Thumbnails */}
          {project.images.length > 1 && (
            <div className="flex gap-2 mb-12 overflow-x-auto pb-2">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setImageIndex(idx)}
                  className="flex-shrink-0 w-20 h-20 overflow-hidden transition-opacity"
                  style={{opacity: idx === imageIndex ? 1 : 0.4, outline: idx === imageIndex ? '2px solid #e8e4dc' : 'none'}}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Details */}
          <div className="grid md:grid-cols-3 gap-12 pt-10" style={{borderTop: '1px solid rgba(255,255,255,0.08)'}}>
            <div className="md:col-span-2 space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{color: '#6a6a5a'}}>Description</p>
                <p className="text-lg leading-relaxed" style={{color: '#b8b4ac'}}>{project.description}</p>
              </div>
              {project.links && (
                <div className="flex flex-wrap gap-3 pt-6" style={{borderTop: '1px solid rgba(255,255,255,0.08)'}}>
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors"
                      style={{border: '1px solid rgba(232,228,220,0.3)', color: '#e8e4dc'}}
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-8">
              {project.dimensions && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{color: '#6a6a5a'}}>Dimensions</p>
                  <p style={{color: '#b8b4ac'}}>{project.dimensions}</p>
                </div>
              )}
              {project.materials && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{color: '#6a6a5a'}}>Materials</p>
                  <div className="flex flex-col gap-1">
                    {project.materials.map((m) => (
                      <p key={m} style={{color: '#b8b4ac'}}>{m}</p>
                    ))}
                  </div>
                </div>
              )}
              {project.techniques && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{color: '#6a6a5a'}}>Techniques</p>
                  <div className="flex flex-col gap-1">
                    {project.techniques.map((t) => (
                      <p key={t} style={{color: '#b8b4ac'}}>{t}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
