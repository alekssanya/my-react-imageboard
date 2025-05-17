const { Thread } = require('../models/models')
const { Post } = require('../models/models')
const ApiError = require('../errors/ApiErrors.js')
const { Op } = require("sequelize");
class AppController {
    async refreshThread(req, res, next) {
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

module.exports = new AppController()