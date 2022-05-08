const express = require('express')
const router = express.Router()
const posts = require("../controllers/posts")
const multer = require("../middlewares/multer")
//const jwtcheck = require("../middlewares/jwtcheck")

router.get('/', posts.getAll)
router.get('/:id', posts.get)
router.post('/', multer, posts.create)
router.delete('/:id', posts.delete)

module.exports = router