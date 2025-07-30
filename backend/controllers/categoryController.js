const Category = require('../models/Category');
const Product  = require('../models/Product');

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({name:1})
    res.json(categories);
  } catch (err) {
    res.status(500).json({ msg: 'Error to fetch categories', error: err.message });
  }
}

exports.getTopCategories = async (req, res) => {
  try {
    const categories = await Category.find({ isTop: true }).sort({ name: 1 })
    res.json(categories);
  } catch (err) {
    res.status(500).json({ msg: 'Error to fetch categories', error: err.message });
  }
}

exports.getPopularCategories = async (req, res) => {
  try {

    const topCategories = await Product.aggregate([
      { $group: { _id: "$categoryId", count: { $sum:1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ])
    
    const ids = topCategories.map(c => c._id)

    const categories = await Category.find({
      _id: {$in: ids}
    }).sort({name:1})
    
    res.json(categories);
  } catch (err) {
    res.status(500).json({ msg: 'Error to fetch categories', error: err.message });
  }
}

exports.createCategory = async (req, res) => {
  try {
    const { name, description, slug, icon } = req.body

    const newCategory = new Category({
      name, description, slug, icon
    })

    const saved = await newCategory.save()
    res.status(201).json(saved)
  } catch (err) {
    res.status(500).json({msg: 'Error to create category', error: err.message})
  }
}