const multer = require('multer')
const {FilesCounter} = require('../models/models')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files')
    },
    filename: async function (req, file, cb) {
        let name = await FilesCounter.create()
        let originalName = ""
        for (let i = file.originalname.length - 1; ; i--) {
            if (file.originalname.charAt(i) === "."){
                originalName = file.originalname.slice(i)
                break
            }
        } 
        cb(null, name.name + originalName)
    }
})

let files = multer({
    storage: storage
}).array("mediaFiles")

module.exports = files