const express = require('express');
const router = express.Router();

const authController = require('../controller/authController');
const keyController = require('../controller/keyController');
const ipController = require('../controller/ipController');

// Menggunakan nama folder 'middleware' (tanpa double 'l')
const authJwt = require('../middleware/authJwt');
const apiKeyAuth = require('../middleware/apiKeyAuth');

// Auth Routes (Public)
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

// Key Management Routes (Protected via JWT)
router.post('/keys/generate', authJwt, keyController.generateKey);

// Data SaaS Routes (Protected via X-API-KEY)
router.get('/v1/ip-check', apiKeyAuth, ipController.getAllIp);
router.get('/v1/ip-check/:ip', apiKeyAuth, ipController.getIpDetail);
router.post('/v1/ip-check', apiKeyAuth, ipController.createIp);
router.put('/v1/ip-check/:ip', apiKeyAuth, ipController.updateIp);
router.delete('/v1/ip-check/:ip', apiKeyAuth, ipController.deleteIp);

module.exports = router;