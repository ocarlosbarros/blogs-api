const Router = require('express').Router();
const CategoryRouter = require('./categoryRouter');
const RegisterRouter = require('./registerRouter');
const UserRouter = require('./userRouter');

Router.use('/user', UserRouter);
Router.use('/login', RegisterRouter);
Router.use('/categories', CategoryRouter);

module.exports = Router;