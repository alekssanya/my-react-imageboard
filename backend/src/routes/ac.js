const express = require('express')
const router = express.Router()
const app = require("../controllers/ac")

router.get('/', app.getThreads)
router.post('/', app.create)
router.post('/:boardName', app.createThread)
module.exports = router