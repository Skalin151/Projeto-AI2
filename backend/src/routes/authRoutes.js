const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/login/mobile', authController.loginMobile);
router.post('/registar', authController.AccountCreate);
router.post('/verificar-conta', authController.VerifyEmail);
router.post('/recuperar-passe', authController.RecoverPassword);
router.post('/reset-passe', authController.ResetPassword);
router.post('/login/google', authController.google);

module.exports = router;


