const { Post } = require('../models/models')
const ApiError = require('../errors/ApiErrors')
const { Thread } = require('../models/models')

class ACController {
    async getThreads(req, res, next) {
        try {
            const { boardName } = req.body
            const threads = await Thread.findAll({where: {
                boardName: boardName
            }})
            return res.status(200).json(threads)
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }

    async create(req, res, next) {
        try {
            const postBody = req.body
            const post = await Post.create(postBody)
            return res.status(201).json("ok")
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }

    async createThread(req, res, next) {
        try {
            const { boardName } = req.params
            const thread = await Thread.create({ boardName: boardName })
            return res.status(201).json(thread)
        } catch (e) {
            next(ApiError.internal((e.message)))
        }
    }
}

module.exports = new ACController()