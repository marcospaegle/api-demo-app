const express = require('express');
const router = express.Router();
const PostController = require('../http/controllers/posts')

router.get('/', PostController.index);
router.get('/:id', PostController.show);
router.post('/', PostController.store);
router.patch('/:id', PostController.update);
router.delete('/:id', PostController.destroy);

module.exports = router;
