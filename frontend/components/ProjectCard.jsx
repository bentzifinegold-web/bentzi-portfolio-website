'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProjectCard({ project, index }) {
  const [imageIndex, setImageIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const handlePrevImage = () => {
    setImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group"
      >
        <div className="project-card glass rounded-2xl overflow-hidden">
          <div className="relative h-96 bg-slate-800 overflow-hidden cursor-pointer" onClick={() => setShowModal(true)}>
            <motion.img
              key={imageIndex}
              src={project.images[imageIndex]}
              alt={`${project.title} - ${imageIndex + 1}`}
              className="w-full h-full object-contain"
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
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm">{project.year}</p>
              </div>
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

            {project.dimensions && (
              <div className="mb-6">
                <p className="text-sm font-semibold text-cyan-400 mb-2">Dimensions</p>
                <p className="text-slate-300">{project.dimensions}</p>
              </div>
            )}

            {project.materials && (
              <div className="mb-6">
                <p className="text-sm font-semibold text-cyan-400 mb-3">Materials</p>
                <div className="flex flex-wrap gap-2">
                  {project.materials.map((material) => (
                    <span key={material} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-200">
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.techniques && (
              <div className="mb-6">
                <p className="text-sm font-semibold text-cyan-400 mb-3">Techniques</p>
                <div className="flex flex-wrap gap-2">
                  {project.techniques.map((technique) => (
                    <span key={technique} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-200">
                      {technique}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.links && (
              <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-700">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-lg text-cyan-400 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all text-sm font-semibold"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowModal(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-cyan-400 transition-colors z-10"
            >
              ✕
            </button>

            <div className="relative bg-slate-800 rounded-xl overflow-hidden">
              <img src={project.images[imageIndex]} alt={project.title} className="w-full h-auto max-h-[80vh] object-cover" />

              {project.images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button onClick={handlePrevImage} className="bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-colors">
                    ←
                  </button>
                  <button onClick={handleNextImage} className="bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-colors">
                    →
                  </button>
                </div>
              )}

              <div className="absolute bottom-4 right-4 bg-black/50 px-4 py-2 rounded-full text-white text-sm">
                {imageIndex + 1} / {project.images.length}
              </div>
            </div>

            <div className="bg-slate-800 p-6 border-t border-slate-700">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-slate-300">{project.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
