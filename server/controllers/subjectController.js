const {Subject} = require('../models/models')
const ApiError = require('../error/ApiError')
class SubjectController {
    async create(req, res, next) {
        try {
        const {title} = req.body
        const subject = await Subject.create({title})
        return res.json(subject)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
        const subjects = await Subject.findAll()
        return res.json(subjects)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new SubjectController()