const express = require('express');
const router = express.Router();

// Import controller functions
const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categoriesControllers');

// CATEGORY ROUTES

// @route   GET /api/categories
// @desc    Get all categories
router.get('/', getAllCategories);

// @route   GET /api/categories/:id
// @desc    Get single category by ID
router.get('/:id', getCategoryById);

// @route   POST /api/categories
// @desc    Create a new category
router.post('/', createCategory);

// @route   PUT /api/categories/:id
// @desc    Update a category
router.put('/:id', updateCategory);

// @route   DELETE /api/categories/:id
// @desc    Delete a category (only if not used by posts)
router.delete('/:id', deleteCategory);

module.exports = router;
