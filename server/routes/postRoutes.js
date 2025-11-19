const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middleware/authMiddleware');

// Import controller functions
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/postControllers');

// POST ROUTES

// @route   GET /api/posts
// @desc    Get all posts
router.get('/', getAllPosts);

// @route   GET /api/posts/:id
// @desc    Get single post by ID
router.get('/:id', getPostById);

// @route   POST /api/posts
// @desc    Create a new post
router.post('/', protect, adminOnly, createPost);   

// @route   PUT /api/posts/:id
// @desc    Update a post
router.put('/:id', updatePost);

// @route   DELETE /api/posts/:id
// @desc    Delete a post
router.delete('/:id', deletePost);

module.exports = router;