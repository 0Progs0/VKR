const Router = require('express')
const router = new Router()
const categoryRouter = require('./categoryRouter')
const userRouter = require('./userRouter')
const materialRouter = require('./materialRouter')

router.use('/user', userRouter)
router.use('/material', materialRouter)
router.use('/category', categoryRouter)

module.exports = router