const projects = [
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
    featured: true,
    category: 'kinetic-sculpture',
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
    featured: true,
    category: 'functional-design',
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
    featured: true,
    category: 'mixed-media',
  },
]

export const getProjects = (req, res) => {
  try {
    const { featured } = req.query

    let filteredProjects = projects

    if (featured === 'true') {
      filteredProjects = projects.filter((p) => p.featured)
    }

    res.json(filteredProjects)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getProjectById = (req, res) => {
  try {
    const { id } = req.params
    const project = projects.find((p) => p.id === parseInt(id))

    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }

    res.json(project)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
