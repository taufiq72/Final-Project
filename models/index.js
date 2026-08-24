const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const pg = require('pg');

const env = process.env.NODE_ENV === 'production' || process.env.VERCEL ? 'production' : 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

// Opsi SSL Wajib untuk Supabase PostgreSQL di Cloud/Vercel
const sslOptions = {
  dialect: 'postgres',
  dialectModule: pg,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Mengabaikan verifikasi self-signed certificate
    }
  }
};

let sequelize;
if (env === 'production') {
  const dbUrl = process.env.POSTGRES_URL || process.env.DATABASE_URL;
  if (dbUrl) {
    sequelize = new Sequelize(dbUrl, sslOptions);
  } else {
    sequelize = new Sequelize(config.database, config.username, config.password, {
      ...config,
      ...sslOptions
    });
  }
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;