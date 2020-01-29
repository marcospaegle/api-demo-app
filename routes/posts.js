const express = require('express');
const router = express.Router();

const Post = require('../models/post');

/* GET get all posts. */
router.get('/', async function(req, res, next) {
  try {
    const result = await Post.paginate()

    res.json({
      data: result
    });
  } catch (err) { console.error(err) }
});

/* GET get post by id. */
router.get('/:id', function(req, res, next) {
  res.json({
    data: post,
  });
});

/* POST add a post. */
router.post('/', async function(req, res, next) {
  try {
    const data = req.body;
    const post = new Post(data);

    await post.save();

    res.json({
      data: post
    });
  } catch (err) { console.error(err) }
});

/* PATCH update a post. */
router.patch('/:id', async function(req, res, next) {
  try {
    const id = req.params.id
    const update = {
      ...req.body,
      updated_at: Date.now()
    };

    const options = {
      new: true,
      useFindAndModify: false
    };

    const post = await Post.findByIdAndUpdate(id, update, options);

    res.json({
      data: post
    });
  } catch (err) { console.error(err) }
});

/* DELETE delete a post. */
router.delete('/:id', async function(req, res, next) {
  try {
    const id = req.params.id

    await Post.findByIdAndDelete(id);

    res.json({
      data: {
        message: `Document ${id} was deleted`
      }
    });
  } catch (err) { console.error(err) }
});

module.exports = router;
