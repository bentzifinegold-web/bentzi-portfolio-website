'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const images = [
  { id: 1,  src: '/images/hero-image.jpg.jpg' },
  { id: 2,  src: '/images/landscape.png' },
  { id: 3,  src: '/images/DJI_0202.JPG' },
  { id: 4,  src: '/images/DJI_0207.JPG' },
  { id: 5,  src: '/images/DJI_0220.JPG' },
  { id: 6,  src: '/images/DJI_0224.JPG' },
  { id: 7,  src: '/images/DJI_0289-EDIT-EDIT-2.jpg' },
  { id: 8,  src: '/images/DJI_0496.jpg' },
  { id: 9,  src: '/images/IDG_20260308_185709_138.jpg' },
  { id: 10, src: '/images/IDG_20260308_185751_149.jpg' },
  { id: 11, src: '/images/IMG_0482.JPG' },
  { id: 12, src: '/images/IMG_0484_Original.JPG' },
  { id: 13, src: '/images/dji_fly_20240509_142858_204_1715257764381_photo_optimized.jpg' },
  { id: 14, src: '/images/dji_fly_20240512_164816_234_1715525309985_photo_optimized.jpg' },
  { id: 15, src: '/images/dji_fly_20240804_103328_291_1722782050836_photo_optimized.jpg' },
  { id: 16, src: '/images/dji_fly_20240804_105736_307_1722783467519_photo_optimized.jpg' },
  { id: 17, src: '/images/dji_fly_20240804_105852_309_1722783539639_photo_optimized.jpg' },
  { id: 18, src: '/images/dji_fly_20240811_084250_326_1723380215869_photo_optimized.jpg' },
]

export default function Photography() {
  const [selected, setSelected] = useState(null)

  return (
    <main className="min-h-screen px-8 py-12" style={{backgroundColor: '#1a1a18'}}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-sm font-bold uppercase tracking-widest mb-12" style={{color: '#6a6a5a'}}>Photography</h1>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelected(image)}
              className="group cursor-pointer break-inside-avoid"
            >
              <div className="overflow-hidden" style={{backgroundColor: '#2a2a28'}}>
                <img
                  src={image.src}
                  alt={`Photography ${image.id}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-8"
          style={{backgroundColor: 'rgba(0,0,0,0.92)'}}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-8 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-60"
            style={{color: '#6a6a5a'}}
          >
            Close ✕
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selected.src}
            alt=""
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </main>
  )
}
