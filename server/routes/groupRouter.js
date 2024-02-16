const Router = require('express')
const router = new Router()
const groupController = require('../controllers/groupConroller')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole(1),   groupController.create)
router.get('/', groupController.getAll)

module.exports = router