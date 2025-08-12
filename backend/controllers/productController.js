const Category = require('../models/Category');
const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    try {
        const { title, description, price, lat, lng } = req.body;
        const imageUrl = req.file ? `/uploads/products/${req.file.filename}` : null;

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
        categoryId: "6899418153e9a6586b32a041",
        });

        const saved = await newProduct.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({ msg: 'Error al crear producto', error: err.message });
    }
}

exports.getNearbyProducts = async (req, res) => {
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
    }).sort({createdAt:-1, title:1})

    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: 'Error al buscar productos', error: err.message });
  }
}

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({createdAt:-1, title:1})
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: 'Error al buscar productos', error: err.message });
  }
}

exports.getProductsByCategory = async (req, res) => {
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
      }).sort({createdAt:-1, title:1});
  
      res.json(products);
    }else{
      res.json([]);
    }
  } catch (err) {
    res.status(500).json({ msg: 'Error al buscar productos', error: err.message });
  }
}