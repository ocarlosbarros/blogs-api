const Joi = require('joi');

const postSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().items(Joi.number()).required(),
});

const validatePostMiddleware = (request, response, next) => {
    const { title, content, categoryIds } = request.body;
    
    const { error } = postSchema.validate({ title, content, categoryIds });

    if (error) throw error;

    next();
};

module.exports = validatePostMiddleware;