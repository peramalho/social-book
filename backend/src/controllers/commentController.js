const Comment = require('../models/comment');
const Post = require('../models/post');
const HttpError = require('../models/http-error');

const createComment = async (req, res, next) => {
  try {
    console.log(req.body.comment);
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
    console.log(req.params.id);
    const comments = await Comment.find({ post: req.params.id });
    console.log(comments);
    res.status(201).json(comments);
  } catch (err) {
    const error = new HttpError(
      'Something wrong. Could not get the comments',
      500
    );
    next(error);
  }
};

module.exports = { createComment, getComments };
