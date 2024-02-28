const {Category} = require('../models/models')
const ApiError = require('../error/ApiError')
class CategoryController {
    async create(req, res, next) {
        try {
        const {title} = req.body
        const category = await Category.create({title})
        return res.json(category)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
        const categories = await Category.findAll()
        return res.json(categories)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new CategoryController()