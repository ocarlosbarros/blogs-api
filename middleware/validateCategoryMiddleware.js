const Joi = require('joi');

const categorySchema = Joi.object({
    name: Joi.string().required(),
});

const validateCategoryMiddleware = (request, response, next) => {
    const { name } = request.body;
    
    const { error } = categorySchema.validate({ name });

    if (error) throw error;

    next();
};

module.exports = validateCategoryMiddleware;