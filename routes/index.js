const express = require('express');
const router = express.Router();

const authController = require('../controller/authController');
const keyController = require('../controller/keyController');
const ipController = require('../controller/ipController');
const { verifyToken } = require('../middleware/authJwt');

// Auth Routes
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

// Key Generation (Wajib lewati verifyToken)
router.post('/keys/generate', verifyToken, keyController.generateKey);

// IP Intelligence Routes
router.get('/ip', ipController.getAllIp);
router.get('/ip/:ip', ipController.getIpDetail);
router.post('/ip', ipController.createIp);
router.put('/ip/:ip', ipController.updateIp);
router.delete('/ip/:ip', ipController.deleteIp);

module.exports = router;