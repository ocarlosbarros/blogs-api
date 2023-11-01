const UserRouter = require('express').Router();
const UserController = require('../controllers/UserController');
const ValidateUser = require('../middleware/validateUserMiddleware');
const EnsureAuthenticated = require('../middleware/ensureAuthenticated');

UserRouter.post('/', ValidateUser, UserController.create);
UserRouter.get('/', EnsureAuthenticated, UserController.findAll);
UserRouter.get('/:id', EnsureAuthenticated, UserController.findById);
UserRouter.delete('/me', EnsureAuthenticated, UserController.destroy);

module.exports = UserRouter;