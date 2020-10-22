const Comment = require('../models/comment');
const Post = require('../models/post');
const HttpError = require('../models/http-error');

const createComment = async (req, res, next) => {
  try {
    const comment = await Comment.create({
      comment: req.body.comment,
      post: req.params.id,
    });
    const post = await Post.findById(req.params.id);
    post.comments.push(comment);
    await post.save();
    res.status(201).json(comment);
  } catch (err) {
    const error = new HttpError(
      'Something wrong. Could not create the comment',
      500
    );
    console.log(err);
    next(error);
  }
};

const getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ post: req.body.id });
    res.status(201).json(comments);
  } catch (err) {
    const error = new HttpError(
      'Something wrong. Could not get the comments',
      500
    );
    next(error);
  }
};

const deleteComment = async (req, res, next) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json({ comment: 'Comment deleted' });
  } catch (err) {
    const error = new HttpError(
      'Something wrong. Could not delete the comment',
      500
    );
    next(error);
  }
};

module.exports = { createComment, getComments, deleteComment };
