const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Comment extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
      this.belongsTo(models.Post, { foreignKey: 'postId', as: 'post' });
    }
  }

  Comment.init({
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });

  return Comment;
};
