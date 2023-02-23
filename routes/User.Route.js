const router = require("express").Router()
const UserController = require('../controllers/User.Controller')
const UserModel = require("../models/User.Model")

router.get('/', UserController.getUsers)
router.post('/', UserController.createUser)
router.post('/import', UserController.importUser)
router.get('/:id', UserController.getByCode)

module.exports = router