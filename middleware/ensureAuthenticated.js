const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const ensureAuthenticated = (request, response, next) => {
    const authtoken = request.headers.authorization;

    if (!authtoken) return response.status(401).json({ message: 'Token not found' });

    try {
        const decoded = jwt.verify(authtoken, secret);
        console.log(decoded);
        next();
    } catch (error) {
        console.log(error.message);
        next(error);
    }
};

module.exports = ensureAuthenticated;