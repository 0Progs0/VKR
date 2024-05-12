const {MaterialFavorite, Material} = require('../models/models')
const ApiError = require('../error/ApiError')
class FavoritesController {
    async toggleFavorite(req, res, next) {
        try {
        const {userId, materialId} = req.body
        const candidate = await MaterialFavorite.findOne({where: {userId, materialId}})
        if (candidate) {
            await MaterialFavorite.destroy({where: {userId, materialId}})
            return res.json({message: 'удалено из избранного'})
        } else {
            await MaterialFavorite.create({userId, materialId})
            return res.json({message: 'добавлено в избранное'})
        }
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getFavorites(req, res) {
        const {id} = req.query
        const favorites = await MaterialFavorite.findAll({where: {userId: id}})
        if (!favorites) {
            return res.json([])
        }
        const materials = await Material.findAll({where: {id: favorites.map(favorite => favorite.materialId)}})
        return res.json(materials)
    }

}

module.exports = new FavoritesController()

