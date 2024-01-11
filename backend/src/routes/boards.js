const express = require('express')
const router = express.Router()
const boards = require("../controllers/boards")

router.get('/', boards.getAll)
router.get('/:name', boards.get)
router.post('/', boards.create)
//router.delete('/:id', boards.delete)

module.exports = router