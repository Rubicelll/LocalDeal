const express = require('express');
const router = express.Router();

const auth = require('../middlewares/authMiddleware');
const productController = require('../controllers/productController')


// MULTER CONFIGURATION
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/products'); // carpeta donde se guardan
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split('.').pop();
    cb(null, Date.now() + '.' + ext);
  },
});
const upload = multer({ storage });

// create product with image (route protected)
router.post('/', auth, upload.single('image'), productController.createProduct)
router.get('/nearby', productController.getNearbyProducts)
router.get('/all', productController.getAllProducts);
router.get('/by-category', productController.getProductsByCategory);

module.exports = router;
