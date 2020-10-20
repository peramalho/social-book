const express = require('express');
const postController = require('./controllers/postController');

const router = express.Router();

router.get('/api/posts', postController.getPosts);
router.post('/api/posts', postController.createPost);

module.exports = router;
