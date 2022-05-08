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

const findAll = async (_request, response, next) => {
    try {
        const users = await User.findAll();
        return response.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const findById = async (request, response, next) => {
    const { id } = request.params;
    try {
        const founded = await User.findByPk(id);

        if (!founded) return response.status(404).json({ message: 'User does not exist' });

        return response.status(200).json(founded);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    create,
    findAll,
    findById,
};