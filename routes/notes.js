import express from 'express'
import controller from '../controllers/notes.js'

const router = express.Router()

router.get('/', controller.getAllNotes)
router.get('/:id', controller.getNoteById)
// router.get('/', controller.getAllNotes)
// router.get('/', controller.getAllNotes)


export default router