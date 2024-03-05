const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Post, { foreignKey: 'userId', as: 'posts' });
      this.hasMany(models.Comment, { foreignKey: 'userId', as: 'comments' });
    }
  }

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
