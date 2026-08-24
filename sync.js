require('dotenv').config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const db = require('./models');

async function syncDatabase() {
  try {
    console.log('Connecting and syncing database to Supabase...');
    await db.sequelize.sync({ alter: true });
    console.log('✅ All tables created successfully in Supabase!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Sync failed:', error);
    process.exit(1);
  }
}

syncDatabase();