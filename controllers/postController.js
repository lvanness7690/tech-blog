const express = require('express');
const router = express.Router();
const { Post } = require('../models'); // Corrected the import

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a post
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.create({ title, content });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a post
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    post.title = title;
    post.content = content;
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a post
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    await post.destroy();
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
