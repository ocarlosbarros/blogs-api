const { User } = require('../models');

const create = async (request, response, next) => {
    const user = request.body;
    try {
        const created = await User.create(user);
        return response.status(201).json(created);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    create,
};