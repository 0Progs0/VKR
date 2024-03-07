const {Group, Category} = require('../models/models')
const ApiError = require('../error/ApiError')
class GroupController {
    async create(req, res, next) {
        try {
            const {title} = req.body
            if (!title) {
                return next(ApiError.badRequest('Некоректное заполнение полей!'))
            }
            const existing = await Group.findOne({where: {title}})
            if (existing) {
                return next(ApiError.badRequest('Группа с таким названием уже существует'))
            }
            const group = await Group.create({title})
            return res.json(group)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
        const groups = await Group.findAll()
        return res.json(groups)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new GroupController()