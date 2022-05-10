const { BlogPost, Category } = require('../models');

const create = async (request, response, next) => {
    const { user } = request;
    const { title, content, categoryIds } = request.body;

    const categories = await Promise.all(categoryIds.map(async (categoryId) => {
        const founded = await Category.findOne({ where: { id: categoryId }, raw: true });
        console.log(founded);
        return founded;
    }));

    if (categories.some((category) => (!category))) {
        return response.status(400).json({ message: '"categoryIds" not found' });
    }

    try {
        const created = await BlogPost
            .create({ title, content, categoryIds, userId: user.payload });
        return response.status(201).json(created);
    } catch (error) {
      next(error);  
    }
};

module.exports = {
    create,
};