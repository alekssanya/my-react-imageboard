const { Board } = require('../models/models')
const ApiError = require('../errors/ApiErrors')

class BoardsController {
    async getAll(req, res) {
        const boards = await Board.findAll()
        console.log('get')
        return res.json(boards)
    }

    async get(req, res) {
        const { name } = req.params
        const board = await Board.findOne({
            where: {
                name: name
            }
        });
        return res.json(board)
    }

    async delete(req, res) {
        const { name } = req.body
        const boards = await Board.drop(name)
        console.log('get')
        return res.json(boards)
    }

    async create(req, res, next) {
        try {
            const body = req.body.body
            console.log(body)
            for (let index = 0; index < body.length; index++) {
                let board = await Board.create({name: body[index]})
                console.log(board)
            }
            return res.json('qwe')
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }
}

module.exports = new BoardsController()