'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(e.target.getAttribute('href'))
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
        const response = await fetch(`${apiUrl}/api/projects`)
        const data = await response.json()
        setProjects(data)
      } catch (error) {
        console.error('Error fetching projects:', error)
        setProjects(defaultProjects)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

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

  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      {/* Featured Projects Grid */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {(loading ? defaultProjects : projects).map((project, idx) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 md:h-96 overflow-hidden bg-gray-200 mb-6">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:brightness-95 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold uppercase tracking-wide">{project.title}</h3>
                  <p className="text-sm text-gray-600 uppercase tracking-wide">{project.year}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-8 py-20 border-t border-black/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl font-bold uppercase tracking-wide mb-8">About</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Bentzi Finegold is a designer and maker focused on innovative product design, material experimentation, and kinetic sculptures. Each project begins with a question about how materials can move, interact, and serve function in unexpected ways.
            </p>
            <p>
              With expertise spanning analog hand-crafting to digital fabrication, Bentzi approaches design from a multidisciplinary perspective. The work combines precision engineering with artistic vision, resulting in pieces that are both beautiful and functional.
            </p>
            <p>
              Whether exploring the kinetic possibilities of chipboard or creating family heirlooms, the focus remains on thoughtful design that respects materials and considers the user's interaction with the object.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-8 py-20 border-t border-black/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold uppercase tracking-wide mb-8">Contact</h2>
          <a
            href="mailto:bentzifinegold@gmail.com"
            className="inline-block text-lg font-bold uppercase tracking-wide text-black hover:text-gray-600 transition-colors"
          >
            bentzifinegold@gmail.com
          </a>
          <div className="mt-8 flex gap-6">
            <a
              href="https://www.linkedin.com/in/bentzi-finegold-9004481b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase tracking-wide text-gray-600 hover:text-black transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
