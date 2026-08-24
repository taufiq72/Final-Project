const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class IpIntelligence extends Model {
    static associate(models) {
      IpIntelligence.hasMany(models.ThreatLog, { foreignKey: 'ip_address', sourceKey: 'ip_address', as: 'threat_logs' });
    }
  }
  IpIntelligence.init({
    ip_address: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    isp: DataTypes.STRING,
    risk_score: DataTypes.INTEGER,
    is_vpn: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    is_tor: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'IpIntelligence',
    tableName: 'ip_intelligence',
    timestamps: false
  });
  return IpIntelligence;
};