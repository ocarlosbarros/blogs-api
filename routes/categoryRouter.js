const CategoryRouter = require('express').Router();
const CategoryController = require('../controllers/CategoryController');
const EnsureAuthenticated = require('../middleware/ensureAuthenticated');
const ValidateCategory = require('../middleware/validateCategoryMiddleware');

CategoryRouter.post('/', EnsureAuthenticated, ValidateCategory, CategoryController.create);
CategoryRouter.get('/', EnsureAuthenticated, CategoryController.findAll);

module.exports = CategoryRouter;