const express = require('express')
const router = express.Router()
const app = require("../controllers/app")

router.get('/', app.getAllThreadsOnBoard)
router.get('/:id', app.getThread)
router.post('/', app.createThread)
router.delete('/:id', app.deleteThread)
module.exports = router