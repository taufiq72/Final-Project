const crypto = require('crypto');
const db = require('../models');
const ApiKey = db.ApiKey;

exports.generateKey = async (req, res) => {
  try {
    // Paksa ambil ID dari req.user mau itu id, userId, atau sub
    const targetUserId = req.user.id || req.user.userId || req.user.sub;

    if (!targetUserId) {
      return res.status(400).json({ error: 'User ID missing in token payload' });
    }

    const newApiKey = 'ipg_live_' + crypto.randomBytes(16).toString('hex');

    // Simpan ke database (mencakup semua penamaan field di Sequelize)
    const apiKeyRecord = await ApiKey.create({
      key: newApiKey,
      UserId: targetUserId,
      userId: targetUserId,
      user_id: targetUserId
    });

    return res.status(201).json({
      message: 'API Key generated successfully',
      apiKey: apiKeyRecord.key
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};