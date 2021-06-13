const express = require('express')
const passport = require('passport')
router = express.Router();
usersRoute = require('../controllers/userControllers')

router.post('/register', usersRoute.usersRegistration)
router.post('/login', passport.authenticate('local'), usersRoute.usersLogin)
router.post('/logout', usersRoute.usersLogout)


module.exports = router;