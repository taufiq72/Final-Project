const express = require('express');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

// Route root untuk tes kesehatan API di browser
app.get('/', (req, res) => {
  res.json({
    message: 'IPGuard SaaS API status ONLINE',
    version: '1.0.0'
  });
});

// Mounting router utama
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;