const multer = require('multer')
const {FilesCounter} = require('../models/models')

async function fileHandler(path) {
    try {
		var process = new ffmpeg();
		process.then(function (video) {
			console.log('The video is ready to be processed');
		}, function (err) {
			console.log('Error: ' + err);
		});
	} catch (e) {
		console.log(e.code);
		console.log(e.msg);
	}
}

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files')
    },
    filename: async function (req, file, cb) {
        let name = await FilesCounter.create()
        let fileExtension = ""
        for (let i = file.originalname.length - 1; ; i--) {
            if (file.originalname.charAt(i) === "."){
                fileExtension = file.originalname.slice(i)
                break
            }
        } 
        cb(null, name.name + fileExtension)
    }
})

let files = multer({
    storage: storage
}).array("mediaFiles")

module.exports = files