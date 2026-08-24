process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./models'); // <-- Import models
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

// Auto create/sync tabel ke Supabase
db.sequelize.sync({ alter: true })
  .then(() => console.log('Database synced successfully'))
  .catch((err) => console.error('Failed to sync database:', err));

app.get('/', (req, res) => {
  res.json({
    message: 'IPGuard SaaS API status ONLINE',
    version: '1.0.0'
  });
});

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;