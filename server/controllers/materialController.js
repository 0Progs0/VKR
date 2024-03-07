const uuid = require('uuid')
const path = require('path')
const {Material, Category} = require('../models/models')
const ApiError = require('../error/ApiError')
class MaterialController {
    async create(req, res, next) {
        try {
            const {title, description, date_publication, userId, categoryId, subjectId, groupId} = req.body
            const {file} = req.files
            if (!title || !description) {
                return next(ApiError.badRequest('Некоректное заполнение полей!'))
            }
            const existing = await Material.findOne({where: {title}})
            if (existing) {
                return next(ApiError.badRequest('Материал с таким названием уже существует'))
            }
            let fileName = uuid.v4() + ".pdf"
            file.mv(path.resolve(__dirname, '..', 'static', fileName))
            const material = await Material.create({title, description, date_publication, userId, categoryId, subjectId, groupId, file: fileName})
            return res.json(material)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req, res, next) {
        try {
        let {userId, subjectId, groupId, categoryId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let materials;
        if (!userId && !subjectId && !groupId && !categoryId) {
            materials = await Material.findAndCountAll({limit, offset})
        }

        if (userId && !subjectId && !groupId && !categoryId) {
            materials = await Material.findAndCountAll({where:{userId}, limit, offset})
        }
        if (!userId && subjectId && !groupId && !categoryId) {
            materials = await Material.findAndCountAll({where:{subjectId}, limit, offset})
        }
        if (!userId && !subjectId && groupId && !categoryId) {
            materials = await Material.findAndCountAll({where:{groupId}, limit, offset})
        }
        if (!userId && !subjectId && !groupId && categoryId) {
            materials = await Material.findAndCountAll({where:{categoryId}, limit, offset})
        }

        if (userId && subjectId && !groupId && !categoryId) {
            materials = await Material.findAndCountAll({where:{userId, subjectId}, limit, offset})
        }
        if (userId && !subjectId && groupId && !categoryId) {
            materials = await Material.findAndCountAll({where:{userId, groupId}, limit, offset})
        }
        if (userId && !subjectId && !groupId && categoryId) {
            materials = await Material.findAndCountAll({where:{userId, categoryId}, limit, offset})
        }
        if (!userId && subjectId && groupId && !categoryId) {
            materials = await Material.findAndCountAll({where:{subjectId, groupId}, limit, offset})
        }
        if (!userId && subjectId && !groupId && categoryId) {
            materials = await Material.findAndCountAll({where:{subjectId, categoryId}, limit, offset})
        }
        if (!userId && !subjectId && groupId && categoryId) {
            materials = await Material.findAndCountAll({where:{groupId, categoryId}, limit, offset})
        }

        if (!userId && subjectId && groupId && categoryId) {
            materials = await Material.findAndCountAll({where:{groupId, subjectId, categoryId}, limit, offset})
        }
        if (userId && !subjectId && groupId && categoryId) {
            materials = await Material.findAndCountAll({where:{userId, groupId, categoryId}, limit, offset})
        }
        if (userId && subjectId && !groupId && categoryId) {
            materials = await Material.findAndCountAll({where:{userId, subjectId, categoryId}, limit, offset})
        }
        if (userId && subjectId && groupId && !categoryId) {
            materials = await Material.findAndCountAll({where:{userId, subjectId, groupId}, limit, offset})
        }

        if (userId && subjectId && groupId && categoryId) {
            materials = await Material.findAndCountAll({where:{userId, subjectId, groupId,categoryId}, limit, offset})
        }
        return res.json(materials)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
        const {id} = req.params
        const material = await Material.findOne(
            {
                where: {id}
            }
        )
        return res.json(material)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getUserMaterial(req, res, next) {
        try {
            const {userId} = req.body
            const material = await Material.findAll(
                {
                    where: {userId}
                }
            )
            return res.json(material)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new MaterialController()