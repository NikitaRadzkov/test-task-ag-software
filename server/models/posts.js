const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Posts.init(
    {
      post_name: DataTypes.STRING,
      post_description: DataTypes.STRING,
      post_image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Posts',
    },
  );
  return Posts;
};
