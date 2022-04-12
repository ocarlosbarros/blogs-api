module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', 
    { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      displayName:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{ len: 8  }
      },

      email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
        validate:{ isEmail: true }
      },

      password:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{ len: 6  }
      },
      
      image:{
        type: Sequelize.STRING
      },
    },
    { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
