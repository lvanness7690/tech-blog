const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../../middleware/authMiddleware');
const { Post, Comment, User } = require('../../models');

// Route for accessing the dashboard
router.get('/', isLoggedIn, async (req, res) => {
  try {
    // Retrieve all posts created by the current user
    const userPosts = await Post.findAll({
      where: { userId: req.session.user_id },
      include: [
        { 
          model: Comment,
          as: 'comments',
          include: [
            { 
              model: User, 
              as: 'user', 
              attributes: ['username']
            }
          ]
        }
      ]
    });
    
    // Render the dashboard page with the user's posts
    res.render('dashboard', { 
      posts: userPosts.map(post => post.get({ plain: true }))
    });
  } catch (err) {
    // If an error occurs, log the error and send a 500 status code with an error message
    console.error('Error fetching user posts:', err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
