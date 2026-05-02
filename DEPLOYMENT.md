# Deployment Guide

This guide covers deploying the Bentzi Finegold portfolio website to Vercel (frontend) and Render (backend).

## Prerequisites

- GitHub account
- Vercel account (free tier available)
- Render account (free tier available)

## Backend Deployment (Render)

### Step 1: Prepare Backend Repository

1. Ensure your `backend/` directory has:
   - `package.json`
   - `server.js`
   - `render.yaml`
   - `.gitignore`

2. Commit and push to GitHub:
   ```bash
   git add backend/
   git commit -m "Add backend API"
   git push origin main
   ```

### Step 2: Deploy to Render

1. Go to [render.com](https://render.com) and sign up/log in
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Select the repository containing the backend
5. Configure the service:
   - **Name**: `bentzi-portfolio-api`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or paid if desired)
6. Set environment variables:
   - `PORT`: `5000`
   - `NODE_ENV`: `production`
7. Click "Deploy Web Service"
8. Wait for deployment to complete
9. Copy the URL (e.g., `https://bentzi-portfolio-api.onrender.com`)

### Step 3: Monitor Backend

1. Visit your Render dashboard
2. Check logs for any errors
3. Test the API: Visit `https://your-api-url/health`
4. Expected response: `{"status":"ok","timestamp":"..."}`

## Frontend Deployment (Vercel)

### Step 1: Prepare Frontend Repository

1. Navigate to the `frontend/` directory
2. Create `.env.local`:
   ```
   NEXT_PUBLIC_API_URL=https://bentzi-portfolio-api.onrender.com
   ```
   (Replace with your actual Render URL)

3. Commit and push to GitHub:
   ```bash
   git add frontend/
   git commit -m "Add frontend application"
   git push origin main
   ```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/log in
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Select the project with the `frontend/` directory
5. Configure the project:
   - **Project Name**: `bentzi-portfolio`
   - **Root Directory**: `frontend` (or `./frontend`)
   - **Framework Preset**: `Next.js`
6. Set environment variables:
   - **NEXT_PUBLIC_API_URL**: Your Render API URL
7. Click "Deploy"
8. Wait for deployment to complete
9. Your site will be live at a `vercel.app` URL

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update backend CORS if needed

## Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=https://bentzi-portfolio-api.onrender.com
```

### Backend (.env)
```
PORT=5000
NODE_ENV=production
```

## Testing Deployment

### Frontend
1. Visit your Vercel URL
2. Check that all sections load correctly
3. Verify images display properly
4. Test navigation and interactions

### Backend
1. Check API endpoints:
   - `GET /health` - Should return `{"status":"ok"}`
   - `GET /api/projects` - Should return projects array
   - `GET /api/projects/1` - Should return project 1

2. Test CORS:
   ```bash
   curl -H "Origin: https://your-vercel-url.vercel.app" \
        https://bentzi-portfolio-api.onrender.com/api/projects
   ```

## Updating Content

### Update Projects

1. Edit `backend/controllers/projectController.js`
2. Modify the `projects` array
3. Commit and push:
   ```bash
   git add backend/
   git commit -m "Update projects"
   git push origin main
   ```
4. Render will automatically redeploy

### Update Styling

1. Edit files in `frontend/`:
   - `app/globals.css` - Global styles
   - `tailwind.config.js` - Tailwind theme
   - Component files for specific changes
2. Commit and push:
   ```bash
   git add frontend/
   git commit -m "Update styling"
   git push origin main
   ```
3. Vercel will automatically redeploy

## Troubleshooting

### Backend not responding

1. Check Render logs:
   - Go to your service dashboard
   - Check "Logs" tab
   - Look for error messages

2. Verify environment variables are set correctly

3. Test locally:
   ```bash
   cd backend
   npm install
   npm start
   ```

### Frontend not loading projects

1. Check browser console for errors
2. Verify `NEXT_PUBLIC_API_URL` is set correctly
3. Test API directly in browser:
   - Visit `https://your-api-url/api/projects`
4. Check CORS configuration in backend

### Images not loading

1. Ensure image URLs are accessible
2. Check that external image domains are allowed in `next.config.js`
3. Verify no mixed content (http/https) issues

### Slow performance

1. Check Render free tier limits
2. Consider upgrading to paid tier
3. Optimize images in projects
4. Check database queries (if applicable)

## Monitoring

### Render
- Monitor logs for errors
- Check uptime status
- Track resource usage

### Vercel
- Monitor deployment history
- Check Web Analytics
- Track build times

## Scaling

### When to upgrade from free tier:

1. **Render**: 
   - If receiving 10k+ requests/month
   - If needing persistent storage
   - For higher performance requirements

2. **Vercel**:
   - If custom domain needed
   - For improved build times
   - For advanced monitoring

## Security

1. Keep dependencies updated:
   ```bash
   npm update
   ```

2. Use environment variables for sensitive data
3. Enable HTTPS (automatic on both platforms)
4. Monitor for security vulnerabilities:
   ```bash
   npm audit
   ```

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Render Docs**: https://render.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Express Docs**: https://expressjs.com
