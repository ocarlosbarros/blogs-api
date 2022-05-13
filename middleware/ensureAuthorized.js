const { Op } = require('sequelize');
const { BlogPost } = require('../models');

const ensureAuthorized = async (request, response, next) => {
    const { payload: userId } = request.user;
    const { id } = request.params;
    console.log('id', id);
    console.log('userId', userId);
    try {
        const founded = await BlogPost.findOne({ where: { [Op.and]: [{ id }, { userId }] } });
        console.log('founded', founded);
        if (!founded) return response.status(401).json({ message: 'Unauthorized user' });
                
        next();
    } catch (error) {
        console.log(error.message);
        next(error);
    }
};

module.exports = ensureAuthorized;