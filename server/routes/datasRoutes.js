var express = require('express')
var router = express.Router()
var datasController = require('../controllers/datasController.js')

router.get('/search', datasController.verify, datasController.search)
router.get('/searchAll', datasController.verify, datasController.searchBoth)

router.get('/', datasController.verify, datasController.list)
router.post('/', datasController.verify, datasController.create)
router.put('/:id', datasController.verify, datasController.update)
router.delete('/:id', datasController.verify, datasController.remove)

module.exports = router
