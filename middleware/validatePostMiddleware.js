const Joi = require('joi');

const postSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryId: Joi.array().items(Joi.number()).required(),
});

const validatePostMiddleware = (request, response, next) => {
    const { title, content, categoryId } = request.body;
    
    const { error } = postSchema.validate({ title, content, categoryId });

    if (error) throw error;

    next();
};

module.exports = validatePostMiddleware;