const UserRouter = require('express').Router();
const UserController = require('../controllers/UserController');
const ValidateUser = require('../middleware/validateUserMiddleware');

UserRouter.post('/', ValidateUser, UserController.create);

module.exports = UserRouter;