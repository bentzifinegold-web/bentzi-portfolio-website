# Quick Start Guide

Get your portfolio website running locally in 5 minutes.

## Prerequisites
- Node.js 16+ installed
- npm or yarn

## Local Development

### Terminal 1: Start the Backend

```bash
cd backend
npm install
npm run dev
```

Expected output:
```
Server running on http://localhost:5000
```

### Terminal 2: Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

Expected output:
```
▲ Next.js 14.0.0
- ready on http://localhost:3000
```

## Visit Your Site

Open http://localhost:3000 in your browser.

You should see:
- Hero section with your name and tagline
- Three project cards: Playback, Ascent, No Direction
- About and contact sections
- Smooth animations and interactions

## Make Changes

### Update Project Content

1. Edit `backend/controllers/projectController.js`
2. Modify the `projects` array with your project info
3. The frontend will automatically fetch the updated data

### Update Design/Styling

1. Edit files in `frontend/`:
   - `app/globals.css` - Global styles
   - `tailwind.config.js` - Colors and theme
   - `components/` - Component styles
2. Changes hot-reload in the browser

### Add Images

1. Update image URLs in `projectController.js`
2. Use any publicly accessible image URLs
3. Or upload to a CDN and reference them

## Deployment

When ready to deploy:

1. **Backend**: Deploy to [Render](https://render.com)
2. **Frontend**: Deploy to [Vercel](https://vercel.com)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## Troubleshooting

### Port Already in Use

If ports 3000 or 5000 are already in use:

```bash
# Find and kill process using port 5000
lsof -i :5000
kill -9 <PID>

# Or specify a different port
PORT=5001 npm run dev
```

### Module Not Found

```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### API Not Connecting

1. Ensure backend is running on http://localhost:5000
2. Check `NEXT_PUBLIC_API_URL` in frontend `.env.local`
3. Check browser console for CORS errors

## Next Steps

1. Customize project details in backend
2. Add your own images
3. Update colors in `tailwind.config.js`
4. Test on mobile and tablet
5. Deploy to Vercel and Render

## Helpful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Express.js Guide](https://expressjs.com)
- [Framer Motion Docs](https://www.framer.com/motion/)
