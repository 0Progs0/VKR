const Router = require('express')
const router = new Router()
const favoritesController = require('../controllers/favoritesController')

router.get('/', favoritesController.getFavorites)
router.patch('/', favoritesController.toggleFavorite)

module.exports = router

