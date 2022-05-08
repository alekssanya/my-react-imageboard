const {Thread} = require('../models/models')
const ApiError = require('../errors/ApiErrors.js')

class ThreadsController{
    async getAll(req, res) {
        const {boardName} = req.body
        const threads = await Thread.findAll({
            where: {
              boardName: boardName
            },
            attributes: ['id', 'boardName'],
            order: [['id', 'DESC']],
          });
          
          //offset: 0 , limit: 5
        return res.json(threads)
    }

    async get(req, res) {
        const {id} = req.params
        const qwe = await Thread.findOne({
            where: {
              id: id
            }
          });
        return res.json(qwe)
    }
    async create(req, res, next) {
        try {
            console.log(req.body)
            const {boardName} = req.body
            const thread = await Thread.create({boardName: boardName})
            console.log(thread)
            return res.json(thread)
        } catch (e) {
            next(ApiError.internal((e.message)))
        }
    }

    async delete(req, res) {
        const {name} = req.body
        const Threads = await Thread.drop(name)
        console.log('get')
        return res.json(Threads)
    }
}

module.exports = new ThreadsController()