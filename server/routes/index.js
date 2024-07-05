const Router = require('express')
const router = new Router()
const subjectRouter = require('./subjectRouter')
const groupRouter = require('./groupRouter')
const categoryRouter = require('./categoryRouter')
const userRouter = require('./userRouter')
const materialRouter = require('./materialRouter')
const favoritesRouter = require('./favoritesRouter')

router.use('/user', userRouter)
router.use('/material', materialRouter)
router.use('/subject', subjectRouter)
router.use('/group', groupRouter)
router.use('/category', categoryRouter)
router.use('/favorites', favoritesRouter)

module.exports = router

