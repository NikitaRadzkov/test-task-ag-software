const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.hasMany(models.User, {
        foreignKey: 'role_id',
        as: 'users'
      });
      Role.belongsToMany(models.Permission, {
        through: 'RolePermission',
        as: 'permissions',
        foreignKey: 'role_id'
      });
    }
  };
  Role.init({
    role_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    role_description:  {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};