const express = require('express');
const router = express.Router();

// Import Controllers
const authController = require('../controller/authController');
const keyController = require('../controller/keyController');     // sesuaikan nama file controller kamu
const ipController = require('../controller/ipController');       // sesuaikan nama file controller kamu

// Middleware Auth (jika ada)
const { verifyToken, verifyApiKey } = require('../middleware/authMiddleware'); // sesuaikan lokasi middleware

// --- 1. AUTH ROUTES ---
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

// --- 2. API KEY MANAGEMENT ROUTES ---
if (keyController && keyController.generateKey) {
  router.post('/keys/generate', verifyToken, keyController.generateKey);
}

// --- 3. IP INTELLIGENCE & CRUD ROUTES ---
if (ipController) {
  // Fetch/Get All IP
  router.get('/v1/ip-check', verifyApiKey, ipController.getAllIp);
  
  // Get Detail Specific IP
  router.get('/v1/ip-check/:ip', verifyApiKey, ipController.getIpDetail);
  
  // Create IP Data
  router.post('/v1/ip-check', verifyApiKey, ipController.createIp);
  
  // Update IP Data
  router.put('/v1/ip-check/:ip', verifyApiKey, ipController.updateIp);
  
  // Delete IP Data
  router.delete('/v1/ip-check/:ip', verifyApiKey, ipController.deleteIp);
}

module.exports = router;