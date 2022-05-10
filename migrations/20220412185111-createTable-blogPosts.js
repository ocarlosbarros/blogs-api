module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', 
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' }
      },

      published: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      },

      updated:  {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      }
    },
    { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
 
  }
};
