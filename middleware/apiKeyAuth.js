const crypto = require('crypto');
const db = require('../models');
const ApiKey = db.ApiKey;

exports.generateKey = async (req, res) => {
  try {
    // Ambil ID dari req.user yang di-pass middleware
    const userId = req.user ? (req.user.id || req.user.userId) : null;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: User authentication payload missing' });
    }

    const newApiKey = 'ipg_live_' + crypto.randomBytes(16).toString('hex');

    const apiKeyRecord = await ApiKey.create({
      key: newApiKey,
      UserId: userId
    });

    res.status(201).json({
      message: 'API Key generated successfully',
      apiKey: apiKeyRecord.key
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};