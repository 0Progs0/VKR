const {Subject} = require('../models/models')
const ApiError = require('../error/ApiError')
class SubjectController {
    async create(req, res) {
        const {title} = req.body
        const subject = await Subject.create({title})
        return res.json(subject)
    }

    async getAll(req, res) {
        const subjects = await Subject.findAll()
        return res.json(subjects)
    }
}

module.exports = new SubjectController()