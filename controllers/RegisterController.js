const authenticateUserService = require('../services/AuthenticateUserService');

const login = async (request, response, next) => {
    const { email, password } = request.body;

    try {
        const token = await authenticateUserService(email, password);
        return response.status(200).json({ token });
    } catch (error) {
        console.log('error', error.message);
        next(error);        
    }
};

module.exports = {
    login,
};