const { Post } = require('../models/models')
const ApiError = require('../errors/ApiErrors.js')
const { Op } = require("sequelize");

class TrackerPanelController {
    async trackerPanelCount(req, res, next) {
        try {
            let { threads, lastpost } = req.query
            threads = threads.split("-")
            lastpost = lastpost.split("-")
            let count = {}
            for (let i = 0; i < threads.length; i++) {
                let temp = await Post.count({
                    where: {
                        ThreadId: threads[i],
                        id: {
                            [Op.gt]: lastpost[i]
                        }
                    }
                })
                count[threads[i]] = temp
            }

            return res.status(200).json(count)
        } catch (e) {
            next(ApiError.internal((e.message)))
        }
    }

    async trackerPanelUpdateCount(req, res, next) {
        try {
            const { id } = req.params
            const { lastpost } = req.query
            const posts = await Post.findAll({
                where: {
                    ThreadId: id,
                    id: {
                        [Op.gt]: lastpost
                    }
                },
                order: ['id'],
                attributes: { exclude: ["updatedAt", "IP"] }
            })
            console.log(posts)
            return res.status(200).json(posts)
        } catch (e) {
            next(ApiError.internal((e.message)))
        }
    }
}

module.exports = new TrackerPanelController()