const {Group} = require('../models/models')
const ApiError = require('../error/ApiError')
class GroupController {
    async create(req, res) {
        const {title} = req.body
        const group = await Group.create({title})
        return res.json(group)
    }

    async getAll(req, res) {
        const groups = await Group.findAll()
        return res.json(groups)
    }
}

module.exports = new GroupController()