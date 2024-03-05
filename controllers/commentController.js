const express = require('express');
const router = express.Router();
const { Comment } = require('../models'); // Replace with your actual model import

// Route to create a comment on a post
router.post('/:postId', async (req, res) => {
    if (!req.session.loggedIn) {
        return res.status(401).json({ message: 'You need to be logged in to comment' });
    }

    try {
        const newComment = await Comment.create({
            content: req.body.content,
            postId: req.params.postId,
            userId: req.session.userId // Replace with your actual session property
        });

        res.status(200).json(newComment);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create comment' });
    }
});

// Add more routes for updating and deleting comments as needed

module.exports = router;
