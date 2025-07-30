const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error(err));

// pone publica la ruta de imagenes 
app.use('/uploads', express.static('uploads'));
// Rutas
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/protected', require('./routes/protectedRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));

// TESTS
// app.get('/ping', (req, res) => {
//   console.log('✅ /ping recibido');
//   res.send('pong');
// });


// const PORT = process.env.PORT || 5000;
const PORT = 4000;
// app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

app.listen(50000, '0.0.0.0', () => console.log('Servidor corriendo en 0.0.0.0:50000'));

