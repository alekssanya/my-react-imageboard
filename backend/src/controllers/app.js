const { Thread } = require('../models/models')
const { Post } = require('../models/models')
const ApiError = require('../errors/ApiErrors.js')

class AppController {
    async getAllThreadsOnBoard(req, res, next) {
        try {
            console.log(req.query)
            const { boardName, offset, limit } = req.query
            const threads = await Thread.findAll({
                where: {
                    boardName: boardName
                },
                attributes: ['id'],
                order: [['id', 'DESC']],
                offset: offset, limit: limit
            })
            let boardThreads = []

            for (let index = 0; index < threads.length; index++) {
                let element = {}
                element.ThreadId = threads[index].id;
                let posts = await Post.findAndCountAll({
                    where: { ThreadId: threads[index].id },
                    order: [['id', 'DESC']],
                    attributes: { exclude: ["updatedAt", "IP"] },
                    limit: 3
                })
                let opPost = await Post.findOne({
                    where: { ThreadId: threads[index].id },
                    order: [['id']],
                    attributes: { exclude: ["updatedAt", "IP"] },
                    limit: 1
                })
                if (posts.rows[posts.rows.length - 1].id !== opPost.id) {
                    posts.rows.push(opPost)
                }
                posts.rows.reverse()
                boardThreads.push(posts)
            }
            return res.status(200).json(boardThreads)
        } catch (e) {
            return next(ApiError.internal((e.message)))
        }
    }

    async getThread(req, res, next) {
        try {
            console.log("qefeqfqefqef")
            console.log(req._parsedUrl.query)
            const boardName = req._parsedUrl.query.split('=')[1]
            const { id } = req.params
            const thread = await Thread.findOne({
                where: { id: id, boardName: boardName },
                order: ['id'],
                attributes: { exclude: ["updatedAt", "IP"] },
            });

            if (!thread) {
                return next(ApiError.notFound("notfound"))
            }

            const posts = await Post.findAll({
                where: { ThreadId: id },
                order: ['id'],
                attributes: { exclude: ["updatedAt", "IP"] },
            });
            return res.json(posts)
        } catch (e) {
            return next(ApiError.internal((e.message)))
        }
    }

    async createThread(req, res, next) {
        try {
            console.log(req.body)
            const message = req.body
            const thread = await Thread.create({
                boardName: message.boardName
            })
            message.ThreadId = thread.id
            const opPost = await Post.create(message)
            return res.status(201).json(opPost)
        } catch (e) {
            next(ApiError.internal((e.message)))
        }
    }

    async deleteThread(req, res, next) {
        try {
            const { id } = req.params
            const thread = await Thread.destroy({
                where: {
                    id: id
                }
            })
            return res.status(201).json(thread)
        } catch (e) {
            next(ApiError.internal((e.message)))
        }
    }

}

module.exports = new AppController()