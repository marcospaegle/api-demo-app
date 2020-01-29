const Post = require('../../models/post');

async function index (req, res, next) {
  try {
    const result = await Post.paginate()
    res.json(Post.collections(result))
  } catch (err) { console.error(err) }
}

async function show (req, res, next) {
  res.json({});
}

async function store (req, res, next) {
  try {
    const data = req.body;
    const post = new Post(data);

    await post.save();

    res.json(post.resource());
  } catch (err) { console.error(err) }
}

async function update (req, res, next) {
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

    res.json(post.resource());
  } catch (err) { console.error(err) }
}

async function destroy (req, res, next) {
  try {
    const id = req.params.id

    await Post.findByIdAndDelete(id)

    res.json({
      message: `Document ${id} was deleted`
    });
  } catch (err) { console.error(err) }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy
}