const Router = require('express')
const router = new Router()
const materialController = require('../controllers/materialController')

router.post('/', materialController.create)
router.get('/', materialController.getAll)
router.get('/:id', materialController.getOne)
router.put('/:id', materialController.updateMaterial)
router.delete('/:id', materialController.deleteMaterial)

module.exports = router