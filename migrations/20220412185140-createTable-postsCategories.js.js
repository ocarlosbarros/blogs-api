module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories',
    { 
      postId: {
        type: Sequelize.INTEGER,
        references: { model: 'BlogPosts', key: 'id' }
      },

      categoryId: {
        type: Sequelize.INTEGER,
        references: { model: 'Categories', key: 'id' }
      },

    },
    { timestamps: false }
    );
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCategories');
  }
};
