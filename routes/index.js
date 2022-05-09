const Router = require('express').Router();
const CategoryRouter = require('./categoryRouter');
const RegisterRouter = require('./registerRouter');
const UserRouter = require('./userRouter');
const PostRouter = require('./PostRouter');

Router.use('/user', UserRouter);
Router.use('/login', RegisterRouter);
Router.use('/categories', CategoryRouter);
Router.use('/post', PostRouter);

module.exports = Router;