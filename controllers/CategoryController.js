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

const findAll = async (request, response, next) => {
    try {
        const categories = await Category.findAll();
        return response.status(200).json(categories);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    create,
    findAll,
};