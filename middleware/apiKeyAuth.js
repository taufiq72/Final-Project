const db = require('../models');
const ApiKey = db.ApiKey;

// Middleware untuk memvalidasi API Key yang dikirim lewat header 'x-api-key'.
// Dipakai untuk melindungi endpoint yang diakses oleh klien eksternal (bukan user login biasa).
exports.verifyApiKey = async (req, res, next) => {
  try {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey) {
      return res.status(401).json({ error: 'API key required' });
    }

    const record = await ApiKey.findOne({ where: { api_key: apiKey } });

    if (!record) {
      return res.status(403).json({ error: 'Invalid API key' });
    }

    req.apiKeyOwnerId = record.user_id;
    next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};