const ffmpeg = require('fluent-ffmpeg')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffprobePath = require('@ffprobe-installer/ffprobe').path;

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

var fs = require("fs")
function fileHandler(req, res, next) {
    if (req.files.length === 0) next()
    try {
        for (let i = 0; i < req.files.length; i++) {
            const element = req.files[i];
            //.input("./files/" + element.filename)
            //     .size('200x?')
            //   .output('preview_' + element.filename);
            if (element.filename.split(".")[1] === "mp4" || element.filename.split(".")[1] === "webm" || element.filename.split(".")[1] === "gif") {
                let process = ffmpeg("./files/" + element.filename)
                .frames(1)
                .size("200x?")
                .save("./files/pv_" + element.filename.split(".")[0] + ".jpg")
            }
            else {
                let process = ffmpeg("./files/" + element.filename)
                .size("200x?")
                .save("./files/pv_" + element.filename)
            }
            /*process.then(function (file) {
                console.log('The video is ready to be processed' + file);
                console.log(file.info_configuration)
                file.addCommand('-vf', `scale="'if(gt(a,4/3),320,-1)':'if(gt(a,4/3),-1,240)'"`)
                file.save("./files_preview/preview_" + element.filename, function (error, file) {
                    if (!error)
                        console.log('Video file: ' + file);
                });
            }, function (err) {
                console.log('Error: ' + err);
            });*/
            next()
        }
    } catch (e) {
        console.log(e.code);
        console.log(e.msg);
    }
}

module.exports = fileHandler