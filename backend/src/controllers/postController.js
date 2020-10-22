const Post = require('../models/post');
const Comment = require('../models/comment');
const HttpError = require('../models/http-error');

const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json(posts);
  } catch (err) {
    const error = new HttpError(
      'Something wrong. Could not fetch the posts list',
      500
    );
    return next(error);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate('comments');
    if (!post) {
      const error = new HttpError('Post não encontrado', 404);
      return next(error);
    }
    return res.status(200).json(post);
  } catch (err) {
    const error = new HttpError(
      'Something wrong. Could not fetch the related post',
      500
    );
    console.log(err);
    return next(error);
  }
};

const createPost = async (req, res, next) => {
  try {
    const post = await Post.create({ message: req.body.message });
    return res.status(201).json(post);
  } catch (err) {
    const error = new HttpError(
      'Something wrong. Could not create the post',
      500
    );
    return next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    await Comment.deleteMany({ post: req.params.id });
    return res.status(200).json({ message: 'Post deleted' });
  } catch (err) {
    const error = new HttpError(
      'Something wrong. Could not delete the post',
      500
    );
    return next(error);
  }
};

module.exports = { getPosts, getPostById, createPost, deletePost };
