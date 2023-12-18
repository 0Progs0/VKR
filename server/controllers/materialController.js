const uuid = require('uuid')
const path = require('path')
const {Material} = require('../models/models')
const ApiError = require('../error/ApiError')
class MaterialController {
    async create(req, res, next) {
        try {
            const {title, description, date_publication, userId, categoryId} = req.body
            const {file} = req.files
            let fileName = uuid.v4() + ".pdf"
            file.mv(path.resolve(__dirname, '..', 'static', fileName))

            const material = await Material.create({title, description, date_publication, userId, categoryId, file: fileName})

            return res.json(material)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {userId, categoryId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let materials;
        if (!userId && !categoryId) {
            materials = await Material.findAndCountAll({limit, offset})
        }
        if (userId && !categoryId) {
            materials = await Material.findAndCountAll({where:{userId}, limit, offset})
        }
        if (!userId && categoryId) {
            materials = await Material.findAndCountAll({where:{categoryId}, limit, offset})
        }
        if (userId && categoryId) {
            materials = await Material.findAndCountAll({where:{userId, categoryId}, limit, offset})
        }
        return res.json(materials)
    }

    async getOne(req, res) {
        const {id} = req.params
        const material = await Material.findOne(
            {
                where: {id}
            }
        )
        return res.json(material)
    }
}

module.exports = new MaterialController()