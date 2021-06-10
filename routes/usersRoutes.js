const express = require('express')
router = express.Router();
usersRoute = require('../controllers/userControllers')

router.get('/', usersRoute.usersController)

module.exports = router;