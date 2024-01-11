const ffmpeg = require('fluent-ffmpeg')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffprobePath = require('@ffprobe-installer/ffprobe').path;

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

var fs = require("fs")
async function fileHandler(req, res, next) {
    if (req.files || req.body.mediaFiles.length > 0) {
        try {
            for (let i = 0; i < req.files.length; i++) {
                const element = req.files[i];
                if (element.filename.split(".")[1] === "mp4" || "webm" || "gif") {
                    let process = await ffmpeg("./files/" + element.filename)
                    process.ffprobe(0, function (err, data) {
                        let widthOrHeight = data.streams[0].width > data.streams[0].height ? '200x?' : '?x200'
                        process.frames(1)
                            .size(widthOrHeight)
                            //.addOutputOptions([`-vf scale=\"\'if(gt(iw,ih),200,100)\':\'if(gt(iw,ih),100,200)\'\"`])
                            .save("./files/pv_" + element.filename.split(".")[0] + ".jpg")
                    })
                }
                else {
                    let process = ffmpeg("./files/" + element.filename)
                    process.ffprobe(0, function (err, data) {
                        let widthOrHeight = data.streams[0].width > data.streams[0].height ? '200x?' : '?x200'
                        process.size(widthOrHeight)
                            .save("./files/pv_" + element.filename)
                    })
                }
            }
        } catch (e) {
            console.log(e)
        }
    }
    next()
}

module.exports = fileHandler