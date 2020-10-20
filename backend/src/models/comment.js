const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  post: { type: mongoose.Types.ObjectId, required: true, ref: 'Post' },
});

const ModelClass = mongoose.model('comment', commentSchema);

module.exports = ModelClass;
