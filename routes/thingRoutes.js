const express = require('express')
router = express.Router();
thingRoute = require('../controllers/thingControllers')

router.get('/:category', thingRoute.getThings)
router.delete('/:id', thingRoute.deleteThing)
router.post('/', thingRoute.createThing)

module.exports = router