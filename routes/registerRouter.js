const RegisterRouter = require('express').Router();
const RegisterController = require('../controllers/RegisterController');
const ValidateUser = require('../middleware/validateUserMiddleware');

RegisterRouter.post('/', ValidateUser, RegisterController.login);

module.exports = RegisterRouter;