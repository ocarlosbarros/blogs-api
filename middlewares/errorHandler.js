const Joi = require('joi');
const errorHandler = (error, _request, response, _next) => {
    
    if(error.message === 'Validation error') return response.status(400).json({ message: 'User already registered' });
    
    if(Joi.isError(error)) return response.status(400).json({ message: error.message });

    //error log to developers
    console.error(error);

    return response.status(500).json({ message: "Oops, something's wrong! Contact our support!"})
}

module.exports = errorHandler;