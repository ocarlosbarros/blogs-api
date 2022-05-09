const PostRouter = require('express').Router();
const PostController = require('../controllers/PostController');
const EnsureAuthenticated = require('../middleware/ensureAuthenticated');
const ValidatePost = require('../middleware/validatePostMiddleware');

PostRouter.post('/', EnsureAuthenticated, ValidatePost, PostController.create);

module.exports = PostRouter;