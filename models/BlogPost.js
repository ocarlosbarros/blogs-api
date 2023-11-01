const User = require('./User');

const userReference = (DataTypes) => ({
        type: DataTypes.INTEGER, 
            allowNull: false,
            foreignKey: true,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            references: { model: User, key: 'userId' },
    });

module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
        userId: userReference(DataTypes), // optional
    }, { timestamps: false });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User,
        { foreignKey: 'userId', as: 'user' });
    };

    return BlogPost;
  };