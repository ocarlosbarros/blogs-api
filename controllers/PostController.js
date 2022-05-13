const { BlogPost, Category, User } = require('../models');

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

const findAll = async (request, response, next) => {
    try {
        const posts = await BlogPost.findAll({
           include: [
               { model: User, as: 'user' },
               { model: Category, as: 'categories', through: { attributes: [] } },
           ], 
        });

        if (!posts) return response.status(404).json({ message: 'Posts not found' });

        return response.status(200).json(posts);
    } catch (error) {
        next(error);
    }
};

const findById = async (request, response, next) => {
    const { id } = request.params;
    
    try {
        const founded = await BlogPost.findOne({
            where: { id },
            include: [
                { model: User, as: 'user' },
                { model: Category, as: 'categories', through: { attributes: [] } },
            ],
        });

        if (!founded) return response.status(404).json({ message: 'Post does not exist' });

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