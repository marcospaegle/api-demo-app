const mongoose = require('../config/mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  profile_pic: String,
  profile_banner: String,
  _type: String,
  cards: [{
    last4Digits: String,
    expiry: String,
    created_at: { type: String, default: Date.now() },
    updated_at: { type: String, default: Date.now() },
    is_default: String,
    gateway_id: String
  }],
  posts: Array,
  subscriptions: Array,
  follwers: Array,
  bank_account: [{
    sort_code: String,
    account: String,
    created_at: { type: String, default: Date.now() },
    updated_at: { type: String, default: Date.now() },
    is_default: String
  }],
  token: String,
  token_expiry: String,
  require_onborading: String,
  require_approve: String,
  created_at: { type: String, default: Date.now() },
  updated_at: { type: String, default: Date.now() },
});

module.exports = mongoose.model('User', userSchema);
