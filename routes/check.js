import express from 'express'
import controller from '../controllers/check.js'

const router = express.Router()

router.post('/', controller.check)


export default router