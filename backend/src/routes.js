const express = require('express');
const postController = require('./controllers/postController');
const commentController = require('./controllers/commentController');

const router = express.Router();

router.get('/api/posts', postController.getPosts);
router.get('/api/posts/:id', postController.getPostById);
router.post('/api/posts', postController.createPost);
router.delete('/api/posts/:id', postController.deletePost);

router.get('/api/posts/:id/comments', commentController.getComments);
router.post('/api/posts/:id/comments', commentController.createComment);

module.exports = router;
