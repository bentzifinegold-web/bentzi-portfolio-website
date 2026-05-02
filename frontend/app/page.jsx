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
        { label: 'Demo 1', url: '#' },
        { label: 'Demo 2', url: '#' },
      ],
      images: [
        'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=800&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
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
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
        'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
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
        'https://images.unsplash.com/photo-1604050612299-1d93e7f10a19?w=800&q=80',
        'https://images.unsplash.com/photo-1511137756754-b1493e3b1b48?w=800&q=80',
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
        </motion.div>
      </section>
    </main>
  )
}
