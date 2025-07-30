const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const Product = require('../models/Product');
const auth = require('../middlewares/authMiddleware');


// MULTER CONFIGURATION
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // carpeta donde se guardan
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split('.').pop();
    cb(null, Date.now() + '.' + ext);
  },
});
const upload = multer({ storage });

// Crear producto
// Ruta protegida para crear productos con imagen
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const { title, description, price, lat, lng } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newProduct = new Product({
      userId: req.userId,
      title,
      description,
      price,
      location: {
        type: 'Point',
        coordinates: [lng, lat],
      },
      image: imageUrl,
    });

    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ msg: 'Error al crear producto', error: err.message });
  }
});

// Buscar productos cercanos
router.get('/nearby', async (req, res) => {
  const { lat, lng } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ msg: 'Faltan coordenadas' });
  }

  try {
    const products = await Product.find({
      location: {
        $near: {
          $geometry: { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
          $maxDistance: 5000 // 5 km
        }
      }
    });

    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: 'Error al buscar productos', error: err.message });
  }
});



// All products
router.get('/all', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: 'Error al buscar productos', error: err.message });
  }
});

// Products by category
router.get('/products-by-category', async (req, res) => {
  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({ msg: 'Category missing' });
  }

  try {
    const category = await Category.findOne({
      slug: slug
    });

    if (category) {
      const products = await Product.find({
        categoryId: category._id
      });
  
      res.json(products);
    }else{
      res.json([]);
    }
  } catch (err) {
    res.status(500).json({ msg: 'Error al buscar productos', error: err.message });
  }
});

module.exports = router;
