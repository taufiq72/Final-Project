const { ApiKey } = require('../models');
const crypto = require('crypto');

exports.generateKey = async (req, res) => {
  try {
    const newKey = 'ipg_live_' + crypto.randomBytes(16).toString('hex');
    const created = await ApiKey.create({ user_id: req.user.userId, api_key: newKey });
    res.status(201).json({ message: 'API Key berhasil dibuat', apiKey: created.api_key });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};