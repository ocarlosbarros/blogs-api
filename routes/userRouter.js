const UserRouter = require('express').Router();
const UserController = require('../controllers/UserController');

UserRouter.post('/', UserController.create);

module.exports = UserRouter;