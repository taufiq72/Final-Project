const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ApiKey extends Model {
    static associate(models) {
      ApiKey.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
  }
  ApiKey.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    api_key: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'ApiKey',
    tableName: 'api_keys',
    underscored: true
  });
  return ApiKey;
};