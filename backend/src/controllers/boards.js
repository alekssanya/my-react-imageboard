const { Board } = require('../models/models')
const ApiError = require('../errors/ApiErrors')

class BoardsController {
    async getAll(req, res) {
        const boards = await Board.findAll()
        return res.json(boards)
    }

    async get(req, res) {
        const { name } = req.params
        const board = await Board.findOne({
            where: {
                name: name
            }
        })
        return res.json(board)
    }

    async delete(req, res) {
        const { name } = req.body
        const boards = await Board.drop(name)
        return res.json(boards)
    }

    async create(req, res, next) {
        try {
            const body = req.body.body
            for (let index = 0; index < body.length; index++) {
                let board = await Board.create({name: body[index]})
            }
            return res.status(201).json("ok")
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }
}

module.exports = new BoardsController()