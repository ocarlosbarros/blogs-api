const Router = require('express').Router();
const RegisterRouter = require('./registerRouter');
const UserRouter = require('./userRouter');

Router.use('/user', UserRouter);
Router.use('/login', RegisterRouter);

module.exports = Router;