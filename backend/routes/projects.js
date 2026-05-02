import express from 'express'
import { getProjects, getProjectById } from '../controllers/projectController.js'

const router = express.Router()

router.get('/projects', getProjects)
router.get('/projects/:id', getProjectById)

export default router
