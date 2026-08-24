const express = require('express');
const router = express.Router();

// Import Auth Controller
const authController = require('../controller/authController');

// Safe import untuk controller lain agar tidak crash jika file/folder belum ada
let keyController, ipController, authMiddleware;

try {
  keyController = require('../controller/keyController');
} catch (e) {
  console.log('keyController not found yet');
}

try {
  ipController = require('../controller/ipController');
} catch (e) {
  console.log('ipController not found yet');
}

try {
  authMiddleware = require('../middleware/authMiddleware');
} catch (e) {
  console.log('authMiddleware not found yet');
}

// --- 1. AUTH ROUTES ---
if (authController && typeof authController.register === 'function') {
  router.post('/auth/register', authController.register);
}
if (authController && typeof authController.login === 'function') {
  router.post('/auth/login', authController.login);
}

// --- 2. API KEY MANAGEMENT ---
if (keyController && typeof keyController.generateKey === 'function') {
  const middleware = (authMiddleware && authMiddleware.verifyToken) ? authMiddleware.verifyToken : (req, res, next) => next();
  router.post('/keys/generate', middleware, keyController.generateKey);
}

// --- 3. IP INTELLIGENCE & CRUD ---
if (ipController) {
  const middleware = (authMiddleware && authMiddleware.verifyApiKey) ? authMiddleware.verifyApiKey : (req, res, next) => next();

  if (typeof ipController.getAllIp === 'function') router.get('/v1/ip-check', middleware, ipController.getAllIp);
  if (typeof ipController.getIpDetail === 'function') router.get('/v1/ip-check/:ip', middleware, ipController.getIpDetail);
  if (typeof ipController.createIp === 'function') router.post('/v1/ip-check', middleware, ipController.createIp);
  if (typeof ipController.updateIp === 'function') router.put('/v1/ip-check/:ip', middleware, ipController.updateIp);
  if (typeof ipController.deleteIp === 'function') router.delete('/v1/ip-check/:ip', middleware, ipController.deleteIp);
}

module.exports = router;