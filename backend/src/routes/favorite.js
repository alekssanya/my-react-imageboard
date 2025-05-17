const express = require('express')
const router = express.Router()
const favorite = require("../controllers/favorite")

router.get('/', favorite.trackerPanelCount)

module.exports = router