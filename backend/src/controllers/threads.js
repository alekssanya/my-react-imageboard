const { Thread } = require('../models/models')
const { Post } = require('../models/models')
const ApiError = require('../errors/ApiErrors.js')
const textAnalizator = require('../services/TextAnalizator')

class ThreadsController {
  async getAllThreadsOnBoard(req, res, next) {
    try {
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
      const boardName = req._parsedUrl.query.split('=')[1]
      const { id } = req.params
      const thread = await Thread.findOne({
        where: { id: id, boardName: boardName },
        order: ['id'],
        attributes: { exclude: ["updatedAt", "IP"] },
      })

      if (!thread) {
        return next(ApiError.notFound("notfound"))
      }

      const posts = await Post.findAll({
        where: { ThreadId: id },
        order: ['id'],
        attributes: { exclude: ["updatedAt", "IP"] },
      })
      return res.json(posts)
    } catch (e) {
      return next(ApiError.internal((e.message)))
    }
  }


  async create(req, res, next) {
    try {
      const postBody = req.files ? JSON.parse(req.body.message) : req.body.message
      const newThread = await Thread.create({ boardName: postBody.boardName })
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

      postBody.ThreadId = newThread.dataValues.id
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
            answers: [...replyPost.dataValues.answers, { id: post.id, ThreadId: post.ThreadId, boardName: post.boardName }]
          })
        }
      }

      return res.status(201).json({ ThreadId: newThread.id })
  } catch (e) {
      next(ApiError.badRequest((e.message)))
  }
  }

  async delete(req, res, next) {
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

module.exports = new ThreadsController()