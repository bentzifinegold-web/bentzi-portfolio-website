'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function Photography() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Photography images - add more images to this array when you upload them
  const images = [
    {
      id: 1,
      src: '/images/hero-image.jpg.jpg',
      alt: 'Landscape photography - river valley',
      title: 'River Valley',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">
            ← Back to Portfolio
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Photography</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            A collection of landscape and architectural photography capturing moments of natural beauty and design.
          </p>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(image)}
              className="group cursor-pointer"
            >
              <div className="relative h-64 md:h-72 overflow-hidden rounded-xl glass">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 flex items-center justify-center transition-all duration-300">
                  <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View
                  </p>
                </div>
              </div>
              {image.title && (
                <p className="mt-4 text-lg font-semibold text-slate-200">{image.title}</p>
              )}
            </motion.div>
          ))}
        </div>

        {images.length === 1 && (
          <div className="mt-12 p-8 glass rounded-xl text-center">
            <p className="text-slate-300 text-lg">
              More photography coming soon! Upload additional photos to expand this gallery.
            </p>
          </div>
        )}
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-cyan-400 transition-colors"
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
            {selectedImage.title && (
              <p className="mt-6 text-xl font-semibold text-slate-200 text-center">
                {selectedImage.title}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </main>
  )
}
