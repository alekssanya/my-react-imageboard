const { Post } = require('../models/models')
const ApiError = require('../errors/ApiErrors')
const textAnalizator = require('../services/TextAnalizator')

class PostsController {
    async getAll(req, res) {
        const Posts = await Post.findAll()
        return res.json(Posts)
    }

    async get(req, res) {
        const { id } = req.params
        const post = await Post.findOne({
            where: {
                id: id
            },
        });
        return res.json(post)
    }

    async create(req, res, next) {
        try {
            const postBody = req.files ? JSON.parse(req.body.message) : req.body.message
            const { formedText, answers, postTitle } = await textAnalizator.formedText(postBody.text)
            postBody.text = formedText
            postBody.postTitle = postTitle
            if (req.files) {
                let filesNames = []
                req.files.forEach(element => {
                    filesNames.push(element.filename)
                });
                postBody.mediaFiles = filesNames
            }

            const post = await Post.create(postBody)

            for (let i = 0; i < answers.length; i++) {
                let replyPost = await Post.findOne({
                    where: {
                        id: Number(answers[i])
                    },
                    attributes: ['id', 'answers', 'ThreadId', 'boardName']
                })
                if (replyPost) {
                    await replyPost.update({
                        answers: [...replyPost.dataValues.answers,
                        { id: post.id, ThreadId: post.ThreadId, boardName: post.boardName }]
                    })
                }
            }
            return res.status(201).json("created!")
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }

    async update(req, res) {
        const { id } = req.params
        const body = req.body
        const post = await Post.update(body, { where: id })
        return res.json(post)
    }

    async delete(req, res) {
        const { id } = req.params
        const post = await Post.destroy({ where: { id: id } })
        return res.json(post)
    }
}

module.exports = new PostsController()