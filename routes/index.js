const express = require('express');
const router = express.Router();

const authController = require('../controller/authController');
const keyController = require('../controller/keyController');
const { verifyToken } = require('../middleware/authMiddleware');

// Auth Routes
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

// Key Generation (Wajib lewati verifyToken)
router.post('/keys/generate', verifyToken, keyController.generateKey);

module.exports = router;