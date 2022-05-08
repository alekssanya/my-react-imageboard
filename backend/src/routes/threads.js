const express = require('express')
const router = express.Router()
const threads = require('../controllers/threads')

router.get('/', threads.getAll)
router.get('/:id', threads.get)
router.post('/', threads.create)
router.delete('/:id', threads.delete)

module.exports = router