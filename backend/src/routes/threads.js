const express = require('express')
const router = express.Router()
const multer = require("../middlewares/multer")
const fileHandler = require("../middlewares/ffmpeg")
const threads = require('../controllers/threads')

router.get('/', threads.getAllThreadsOnBoard)
router.get('/:id', threads.getThread)
router.post('/', multer, fileHandler, threads.create)
router.delete('/:id', threads.delete)

module.exports = router