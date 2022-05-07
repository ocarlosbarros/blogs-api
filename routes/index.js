const Router = require('express').Router();
const UserRouter = require('./userRouter');

Router.use('/user', UserRouter);

module.exports = Router;