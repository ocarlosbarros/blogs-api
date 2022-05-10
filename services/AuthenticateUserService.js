const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const { User } = require('../models');

require('dotenv').config();

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET;

const authenticateUserService = async (email, password) => {
    const [user] = await User.findAll({
        where: {
            [Op.and]: [
              { email },
              { password },
            ],
          },
        raw: true,
    });

    if (!user) throw new Error('Invalid fields');

    const token = jwt.sign({ payload: user.id }, secret, jwtConfig);
    
    return token;
};

module.exports = authenticateUserService;