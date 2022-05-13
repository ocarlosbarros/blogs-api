const Joi = require('joi');

const postCreateSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().items(Joi.number()).required(),
});

const postUpdateSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
});

const createBlogPost = (request, response, next) => {
    const { title, content, categoryIds } = request.body;
    
    const { error } = postCreateSchema.validate({ title, content, categoryIds });

    if (error) throw error;

    next();
};

const updateBlogPost = (request, response, next) => {
    const { title, content } = request.body;
    
    const { error } = postUpdateSchema.validate({ title, content });

    if (error) throw error;

    next();
};

module.exports = {
    createBlogPost,
    updateBlogPost,
};