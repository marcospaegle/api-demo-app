const mongoose = require('../config/mongoose');
const paginate = require('../hepers/schema/paginate');

const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  owner_id: String,
  likes: String,
  medias: [{
    link: String,
    _type: String,
    created_at: { type: String, default: Date.now() }
  }],
  comments: [{
    owner_id: String,
    body: String,
    created_at: { type: String, default: Date.now() }
  }],
  created_at: { type: String, default: Date.now() },
  updated_at: { type: String, default: Date.now() },
});

postSchema.methods.toString = function () {
  return JSON.stringify(this);
};

postSchema.static('paginate', paginate);

module.exports = mongoose.model('Post', postSchema);
