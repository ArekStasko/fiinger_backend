const express = require('express')
router = express.Router();
thingRoute = require('../controllers/thingControllers')
const catchAsync = require('../utils/catchAsync')
const { isLoggedIn } = require('../middleware')

router.get('/:category', isLoggedIn, catchAsync(thingRoute.getThings))
router.delete('/:id', isLoggedIn, catchAsync(thingRoute.deleteThing))
router.post('/', isLoggedIn, catchAsync(thingRoute.createThing))

module.exports = router