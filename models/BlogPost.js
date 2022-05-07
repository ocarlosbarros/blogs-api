module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
        userId: { type: DataTypes.INTEGER, foreignKey: true }, // optional
    }, { timestamps: false });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User,
        { foreignKey: 'userId', as: 'users' });
    };

    return BlogPost;
  };