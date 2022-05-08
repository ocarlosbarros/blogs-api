const Joi = require('joi');

const errorHandler = (error, _request, response, _next) => {
    if (Joi.isError(error)) return response.status(400).json({ message: error.message });
    
    switch (error.message) {
        case 'Validation error':
        return response.status(409).json({ message: 'User already registered' }); 
        
        case 'Invalid fields':
        return response.status(400).json({ message: error.message }); 
        
        case 'jwt malformed':
        return response.status(401).json({ message: 'Expired or invalid token' }); 

        default:
        // error log to developers
        console.error(error);
       return response.status(500)
                        .json({ message: 'Oops, something\'s wrong! Contact our support!' });
    }
};

module.exports = errorHandler;