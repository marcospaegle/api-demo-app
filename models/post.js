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

postSchema.methods.resource = function () {
  return {
    _id: `${this._id}`,
    title: `${this.title}`,
    body: `${this.body}`,
    owner_id: `${this.owner_id}`,
    likes: `${this.likes}`,
    medias: this.medias,
    comments: this.comments,
    created_at: `${this.created_at}`,
    updated_at: `${this.updated_at}`
  }
};

postSchema.static('collections', function (resources) {
  const posts = []
  for (const post of resources) {
    posts.push(post.resource())
  }

  return posts
});

postSchema.static('paginate', paginate);

module.exports = mongoose.model('Post', postSchema);
