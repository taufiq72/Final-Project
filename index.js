const express = require('express');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to IPGuard Risk Intelligence API' });
});

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;