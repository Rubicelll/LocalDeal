const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/profile', authMiddleware, (req, res) => {
  // Aquí puedes usar req.userId para obtener datos del usuario
  res.json({ msg: 'Acceso autorizado a perfil', userId: req.userId });
});

module.exports = router;
