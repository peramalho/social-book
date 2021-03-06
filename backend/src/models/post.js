const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  message: { type: String, required: true },
  comments: [{ type: mongoose.Types.ObjectId, ref: 'comment' }],
});

const ModelClass = mongoose.model('post', postSchema);

module.exports = ModelClass;
