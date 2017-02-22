var express = require('express')
var router = express.Router()
var dataDatesController = require('../controllers/dataDatesController.js')

router.get('/', dataDatesController.list)
router.get('/:id', dataDatesController.show)
router.post('/', dataDatesController.create)
router.put('/:id', dataDatesController.update)
router.delete('/:id', dataDatesController.remove)

module.exports = router
