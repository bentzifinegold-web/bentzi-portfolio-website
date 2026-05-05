'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ProjectCard({ project, index }) {
  const [imageIndex, setImageIndex] = useState(0)

  const handlePrevImage = () => {
    setImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group cursor-pointer"
      >
        <div className="project-card glass rounded-2xl overflow-hidden">
          <div className="relative h-96 bg-slate-800 overflow-hidden">
            <motion.img
              key={imageIndex}
              src={project.images[imageIndex]}
              alt={`${project.title} - ${imageIndex + 1}`}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="blur-overlay" />

            {project.images.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrevImage()
                  }}
                  className="bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNextImage()
                  }}
                  className="bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors"
                >
                  →
                </button>
              </div>
            )}

            <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-sm font-semibold">
              {imageIndex + 1} / {project.images.length}
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm">{project.year}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
