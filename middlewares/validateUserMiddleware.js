const Joi = require('joi');

const userSchema = Joi.object({
    displayName: Joi.string().min(8),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }).required(),
    password: Joi.string().min(6).max(6).required(),
});

const validateUserMiddleware = (request, response, next) => {
    const { displayName, email, password } = request.body;
    
    const { error } = userSchema.validate({ displayName, email, password });

    if(error) throw error;

    next();
};

module.exports = validateUserMiddleware;