const PostRouter = require('express').Router();
const PostController = require('../controllers/PostController');
const EnsureAuthenticated = require('../middleware/ensureAuthenticated');
const EnsureAuthorized = require('../middleware/ensureAuthorized');
const Validate = require('../middleware/validatePostMiddleware');

PostRouter.post('/', EnsureAuthenticated, Validate.createBlogPost, PostController.create);
PostRouter.get('/', EnsureAuthenticated, PostController.findAll);
PostRouter.get('/:id', EnsureAuthenticated, PostController.findById);
PostRouter.put('/:id', EnsureAuthenticated, EnsureAuthorized, 
Validate.updateBlogPost, PostController.update);
PostRouter.delete('/:id', EnsureAuthenticated, EnsureAuthorized, PostController.destroy);

module.exports = PostRouter;