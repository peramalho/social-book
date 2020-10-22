const Post = require('../models/post');
const HttpError = require('../models/http-error');

const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (err) {
    const error = new HttpError(
      'Something wrong. Could not fetch the posts list',
      500
    );
    next(error);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      const error = new HttpError('Post não encontrado', 404);
      next(error);
    }
    res.status(200).json(post);
  } catch (err) {
    const error = new HttpError(
      'Something wrong. Could not fetch the related post',
      500
    );
    next(error);
  }
};

const createPost = async (req, res, next) => {
  try {
    const post = await Post.create({ message: req.body.message });
    res.status(201).json(post);
  } catch (err) {
    const error = new HttpError(
      'Something wrong. Could not create the post',
      500
    );
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Post deleted' });
  } catch (err) {
    const error = new HttpError(
      'Something wrong. Could not delete the post',
      500
    );
    next(error);
  }
};

module.exports = { getPosts, getPostById, createPost, deletePost };
