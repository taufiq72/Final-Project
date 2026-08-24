const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ThreatLog extends Model {
    static associate(models) {
      ThreatLog.belongsTo(models.IpIntelligence, { foreignKey: 'ip_address', targetKey: 'ip_address', as: 'ip_info' });
    }
  }
  ThreatLog.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    ip_address: DataTypes.STRING,
    threat_type: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ThreatLog',
    tableName: 'threat_logs',
    underscored: true
  });
  return ThreatLog;
};