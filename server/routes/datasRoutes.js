var express = require('express')
var router = express.Router()
var datasController = require('../controllers/datasController.js')

router.get('/', datasController.verify, datasController.list)
router.get('/:id', datasController.show)
router.post('/', datasController.verify, datasController.create)
router.put('/:id', datasController.verify, datasController.update)
router.delete('/:id', datasController.verify, datasController.remove)

module.exports = router
