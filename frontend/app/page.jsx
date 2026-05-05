'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import HeroSection from '@/components/HeroSection'

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
    <main className="min-h-screen">
      <HeroSection />

      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl">
            Each project represents a unique exploration of material, form, and function. From kinetic sculptures to functional climbing tools, these pieces demonstrate innovative design thinking and meticulous craftsmanship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {(loading ? defaultProjects : projects).map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-2xl"
        >
          <h2 className="text-4xl font-bold mb-8">About</h2>
          <div className="space-y-6 text-lg text-slate-300">
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

      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-2xl text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <a href="mailto:bentzifinegold@gmail.com" className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
            Send me an email
          </a>
          <div className="mt-8 flex justify-center">
            <a href="https://www.linkedin.com/in/bentzi-finegold-9004481b1/" target="_blank" rel="noopener noreferrer" className="inline-block p-3 text-cyan-400 hover:text-cyan-300 hover:scale-110 transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
