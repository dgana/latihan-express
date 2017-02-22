var express = require('express')
var router = express.Router()
var datasController = require('../controllers/datasController.js')

router.get('/letter', datasController.verify, datasController.searchLetter)
router.get('/frequency', datasController.verify, datasController.searchFrequency)
router.get('/letterfrequency', datasController.verify, datasController.searchBoth)

router.get('/', datasController.verify, datasController.list)
router.post('/', datasController.verify, datasController.create)
router.put('/:id', datasController.verify, datasController.update)
router.delete('/:id', datasController.verify, datasController.remove)

module.exports = router
