const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
   static associate(models) {
      Posts.belongsTo(models.User, {
        foreignKey: 'user_id'
      })
    }
  }
  Posts.init(
    {
      user_id: DataTypes.INTEGER,
      post_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      post_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      post_image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    {
      sequelize,
      modelName: 'Posts',
    },
  );
  return Posts;
};
