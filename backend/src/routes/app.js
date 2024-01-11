const express = require('express')
const router = express.Router()
const app = require("../controllers/app")

router.get('/:id', app.refreshThread)
module.exports = router