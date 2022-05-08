const { Post } = require('../models/models')
const ApiError = require('../errors/ApiErrors')

class PostsController {
    async getAll(req, res) {
        const Posts = await Post.findAll()
        console.log('get')
        return res.json(Posts)
    }

    async get(req, res) {
        const { id } = req.params
        const resp = await Post.findOne({
            where: {
                id: id
            }
        });
        return res.json(resp)
    }

    async create(req, res, next) {
        try {
            const postBody = JSON.parse(req.body.message)
            let filesNames = []
            req.files.forEach(element => {
                filesNames.push(element.filename)
            });
            postBody.mediaFiles = filesNames
            const post = await Post.create(postBody)
            return res.status(200)
        } catch (e) {
            console.log(e)
            next(ApiError.badRequest((e.message)))
        }
    }

    async delete(req, res) {
        const { name } = req.body
        const Posts = await Post.drop(name)
        console.log('get')
        return res.json(Posts)
    }
}

module.exports = new PostsController()