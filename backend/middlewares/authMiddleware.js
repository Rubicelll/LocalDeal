const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader) return res.status(401).json({ msg: 'No token, access denied' });

  // El token suele enviarse como: "Bearer <token>"
  const token = authHeader.split(' ')[1]; // Extraemos solo el token

  if (!token) return res.status(401).json({ msg: 'No token, access denied' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId; // Guardamos userId para uso posterior
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Invalid token' });
  }
};
