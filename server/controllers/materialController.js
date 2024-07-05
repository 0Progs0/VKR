const uuid = require('uuid')
const path = require('path')
const {Material, Tag} = require('../models/models')
const ApiError = require('../error/ApiError')
const {Sequelize} = require("sequelize");
class MaterialController {
    async create(req, res, next) {
        try {
            let {title, description, date_publication, userId, categoryId, subjectId, groupId, tags} = req.body
            const {file} = req.files
            if (!title || !description) {
                return next(ApiError.badRequest('Некорректное заполнение полей!'))
            }
            const existing = await Material.findOne({where: {title}})
            if (existing) {
                return next(ApiError.badRequest('Материал с таким названием уже существует'))
            }
            let fileName = uuid.v4() + ".pdf"
            file.mv(path.resolve(__dirname, '..', 'static', fileName))
            const material = await Material.create({title, description, date_publication, userId, categoryId, subjectId, groupId, file: fileName})

            if (tags) {
                tags = JSON.parse(tags).forEach(async tag => {
                    const existingTag = await Tag.findOne({where: {title: tag.title}})
                    if (!existingTag) {
                        const newTag = await Tag.create({title: tag.title, materialId: material.id})
                    }
                })
            }
            return res.json(material)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res, next) {
        try {
            let {userId, subjectId, groupId, categoryId, title, limit, page} = req.query
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            let where = {}
            if (userId) where.userId = userId
            if (subjectId) where.subjectId = subjectId
            if (groupId) where.groupId = groupId
            if (categoryId) where.categoryId = categoryId
            let likes = []
            if (title) {
                likes.push(Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', '%' + title.toLowerCase() + '%'))
            }
            if (likes.length > 0) {
                where[Sequelize.Op.and] = likes
            }
            const materials = await Material.findAndCountAll({where, limit, offset, likes})
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
                where: {id},
                include:[{model:Tag, as: 'tags'}]
            }
        )
        return res.json(material)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }


    async updateMaterial(req, res, next) {
        try {
            const {id, title, description, date_publication, userId, categoryId, subjectId, groupId} = req.body
            const {file} = req.files
            if (!title || !description) {
                return next(ApiError.badRequest('Некоректное заполнение полей!'))
            }
            let fileName = uuid.v4() + ".pdf"
            file.mv(path.resolve(__dirname, '..', 'static', fileName))
            const material = await Material.update({title, description, date_publication, userId, categoryId, subjectId, groupId, file: fileName}, {where: {id}})
            return res.json(material)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async deleteMaterial(req, res, next) {
        try {
            const {id} = req.params
            const material = await Material.destroy({
                where : {id}
            })
        }
        catch (e) {
            next(ApiError.badRequest(req.body))
        }
    }
}

module.exports = new MaterialController()