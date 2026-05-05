'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Default projects data (same as in home page)
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
      { label: 'Demo 1', url: '#' },
      { label: 'Demo 2', url: '#' },
    ],
    images: [
      '/images/playback1.png',
      '/images/playback2.png',
      '/images/playback3.png',
    ],
    gallery: true,
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
    images: [
      '/images/IMG_8330.jpg',
      '/images/IMG_8331.jpg',
      '/images/IMG_8351.jpg',
      '/images/IMG_8362.jpg',
    ],
    gallery: true,
  },
  {
    id: 3,
    title: 'No Direction',
    year: '2024',
    description: 'No Direction is a wooden compass made of poplar, acrylic, felt, and metal. The thought is that as generations of the Finegold family continue they can keep this compass with them to remind them to be grounded in these virtues. This heirloom piece represents family values and serves as a tangible reminder of what matters most.',
    materials: ['Poplar Wood', 'Acrylic', 'Felt', 'Metal'],
    techniques: ['Wood Working', 'Hand Crafting', 'Mixed Media'],
    images: [
      '/images/No direction.jpg',
      '/images/No direction1.jpg',
      '/images/Nodirection2.jpg',
    ],
    gallery: true,
  },
]

export default function ProjectPage({ params }) {
  const projectId = parseInt(params.id)
  const project = defaultProjects.find((p) => p.id === projectId)
  const [imageIndex, setImageIndex] = useState(0)

  if (!project) {
    return (
      <main className="min-h-screen">
        <section className="max-w-6xl mx-auto px-6 py-20">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">
            ← Back to Portfolio
          </Link>
          <h1 className="text-4xl font-bold">Project not found</h1>
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
    <main className="min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">
          ← Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-slate-400">{project.year}</p>
          </div>

          {/* Image Gallery */}
          <div className="mb-12">
            <div className="relative h-96 md:h-[500px] bg-slate-800 rounded-2xl overflow-hidden glass mb-4">
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
                  <button
                    onClick={handlePrevImage}
                    className="bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-colors"
                  >
                    →
                  </button>
                </div>
              )}

              <div className="absolute bottom-4 right-4 bg-black/50 px-4 py-2 rounded-full text-white text-sm">
                {imageIndex + 1} / {project.images.length}
              </div>
            </div>

            {/* Image Thumbnails */}
            {project.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setImageIndex(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      idx === imageIndex ? 'border-cyan-400' : 'border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="glass p-8 rounded-2xl mb-8">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-slate-300 leading-relaxed">{project.description}</p>
              </div>

              {project.links && (
                <div className="glass p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold mb-4">Links</h2>
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="md:col-span-1">
              {project.dimensions && (
                <div className="glass p-6 rounded-2xl mb-6">
                  <p className="text-sm font-semibold text-cyan-400 mb-3">Dimensions</p>
                  <p className="text-slate-300">{project.dimensions}</p>
                </div>
              )}

              {project.materials && (
                <div className="glass p-6 rounded-2xl mb-6">
                  <p className="text-sm font-semibold text-cyan-400 mb-3">Materials</p>
                  <div className="flex flex-col gap-2">
                    {project.materials.map((material) => (
                      <span key={material} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-200">
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.techniques && (
                <div className="glass p-6 rounded-2xl">
                  <p className="text-sm font-semibold text-cyan-400 mb-3">Techniques</p>
                  <div className="flex flex-col gap-2">
                    {project.techniques.map((technique) => (
                      <span key={technique} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-200">
                        {technique}
                      </span>
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
