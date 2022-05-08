const { Category } = require('../models');

const create = async (request, response, next) => {
    const category = request.body;
    try {
        const created = await Category.create(category);
        return response.status(201).json(created);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    create,
};