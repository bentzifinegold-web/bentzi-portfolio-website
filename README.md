# Bentzi Finegold Portfolio Website

A professional, modern portfolio website showcasing innovative design projects. Built with Next.js (Vercel) for the frontend and Express.js (Render) for the backend.

## Project Structure

```
portfolio-website/
├── frontend/          # Next.js frontend application
│   ├── app/          # Next.js app directory
│   ├── components/   # React components
│   ├── public/       # Static assets
│   └── package.json
└── backend/          # Express.js backend API
    ├── routes/       # API routes
    ├── controllers/  # Route handlers
    └── package.json
```

## Features

- **Modern Design**: Sleek, professional interface with gradient accents and glass morphism effects
- **Responsive Layout**: Fully responsive design for desktop, tablet, and mobile
- **Project Showcase**: Detailed project cards with multiple images, materials, techniques, and links
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Image Gallery**: Interactive gallery with navigation for project images
- **API Integration**: Backend API for project data management
- **SEO Optimized**: Next.js metadata and proper semantic HTML

## Tech Stack

### Frontend
- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Axios** - HTTP client

### Backend
- **Express.js** - Node.js web framework
- **CORS** - Cross-origin resource sharing

## Getting Started

### Frontend Setup (Vercel)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Backend Setup (Render)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. The server will run on [http://localhost:5000](http://localhost:5000)

## Deployment

### Frontend on Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Set environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_API_URL` - Your Render backend URL
4. Deploy with a single click

### Backend on Render

1. Push your code to GitHub
2. Create a new Web Service on Render
3. Connect your GitHub repository
4. Set environment variable:
   - `PORT` - 5000 (default)
5. Deploy

## API Routes

### GET /api/projects
Returns all projects

**Query Parameters:**
- `featured=true` - Returns only featured projects

**Response:**
```json
[
  {
    "id": 1,
    "title": "Playback",
    "year": "2025",
    "description": "...",
    "materials": [],
    "dimensions": "3.1\" × 2\" × 0.9\"",
    "techniques": [],
    "images": [],
    "links": []
  }
]
```

### GET /api/projects/:id
Returns a specific project by ID

## Project Details

### Playback (2025)
- **Materials**: Chipboard, White Glue, Sewing Needle
- **Dimensions**: 3.1" × 2" × 0.9"
- **Description**: A kinetic sculpture replicating a speaker with functional clip mechanism
- **Techniques**: Analog cuts, material manipulation, kinetic design

### Ascent (2025)
- **Materials**: Chipboard, Digital Manufacturing
- **Description**: Climbing hand stretcher designed for grip strength recovery
- **Techniques**: Digital design, CNC fabrication, ergonomic engineering

### No Direction (2024)
- **Materials**: Poplar wood, acrylic, felt, metal
- **Description**: Wooden compass serving as family heirloom
- **Techniques**: Wood working, hand crafting, mixed media

## Customization

### Add New Projects
Edit `backend/controllers/projectController.js` and add project data to the `projects` array.

### Update Styling
- Modify `frontend/app/globals.css` for global styles
- Update `frontend/tailwind.config.js` for Tailwind configuration
- Edit component classes in React components

### Change Colors
Update the gradient colors and theme in:
- `frontend/app/globals.css`
- `frontend/tailwind.config.js`
- Individual component files

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images with Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- Smooth 60fps animations with Framer Motion
- API caching with Next.js

## License

© 2025 Bentzi Finegold. All rights reserved.
