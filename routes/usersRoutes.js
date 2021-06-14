const express = require('express')
const passport = require('passport')
router = express.Router();
const catchAsync = require('../utils/catchAsync')
usersRoute = require('../controllers/userControllers')

router.post('/register', catchAsync(usersRoute.usersRegistration))
router.post('/login', passport.authenticate('local'), catchAsync(usersRoute.usersLogin))
router.post('/logout', catchAsync(usersRoute.usersLogout))


module.exports = router;