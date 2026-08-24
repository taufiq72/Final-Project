const crypto = require('crypto');
const db = require('../models');
const ApiKey = db.ApiKey;

exports.generateKey = async (req, res) => {
  try {
    // Membaca req.user dengan aman (opsional chaining)
    const userId = req.user?.id || req.user?.userId;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: User authentication payload missing' });
    }

    const newApiKey = 'ipg_live_' + crypto.randomBytes(16).toString('hex');

    const apiKeyRecord = await ApiKey.create({
      api_key: newApiKey,
      user_id: userId
    });

    res.status(201).json({
      message: 'API Key generated successfully',
      apiKey: apiKeyRecord.api_key
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};