import express from 'express'
import controller from '../controllers/notes.js'
import multer from 'multer'
import {v4 as uuid} from 'uuid'

const storage = multer.diskStorage({
  destination : (req, file, cb)=>{
    cb(null, './uploads')
  },
  filename : (req, file, cb)=>{
    const filename = `${Date.now()}-${uuid()}.md`
    cb(null, filename)
  },
})
const upload = multer({storage : storage})

const router = express.Router()

router.get('/', controller.getAllNotes)
router.get('/:id', controller.getNoteById)
router.post('/', upload.single('file'), controller.uploadNote)
// router.get('/', controller.getAllNotes)


export default router