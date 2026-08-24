const { ApiKey } = require('../models');

module.exports = async (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey) {
    return res.status(401).json({ error: 'Header X-API-KEY wajib disertakan' });
  }

  try {
    const foundKey = await ApiKey.findOne({ where: { api_key: apiKey } });
    if (!foundKey) {
      return res.status(403).json({ error: 'X-API-KEY tidak valid' });
    }
    req.apiKeyData = foundKey;
    next();
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};