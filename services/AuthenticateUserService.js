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
    const [result] = await User.findAll({
        where: {
            [Op.and]: [
              { email },
              { password },
            ],
          },
    });

    if (!result) throw new Error('Invalid fields');

    const user = result.dataValues;

    const token = jwt.sign({ data: user }, secret, jwtConfig);
    
    return token;
};

module.exports = authenticateUserService;