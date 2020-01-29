const express = require('express');
const router = express.Router();
const AuthController = require('../http/controllers/auth')

router.post('/login', AuthController.login);
router.post('/join', AuthController.join);

module.exports = router;
