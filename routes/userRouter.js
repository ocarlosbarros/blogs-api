const UserRouter = require('express').Router();
const UserController = require('../controllers/UserController');
const ValidateUser = require('../middlewares/validateUserMiddleware');

UserRouter.post('/', ValidateUser, UserController.create);

module.exports = UserRouter;