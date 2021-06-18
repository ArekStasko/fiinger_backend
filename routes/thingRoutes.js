const express = require('express')
router = express.Router();
thingRoute = require('../controllers/thingControllers')
const catchAsync = require('../utils/catchAsync')
const { isLoggedIn } = require('../middleware')

router.get('/:category', catchAsync(thingRoute.getThings))
router.delete('/:id', catchAsync(thingRoute.deleteThing))
router.post('/', catchAsync(thingRoute.createThing))

module.exports = router