const express = require('express');
const router = express.Router();

router.get('/', async function(req, res, next) {});
router.get('/:id', function(req, res, next) {});
router.post('/', async function(req, res, next) {});
router.patch('/:id', async function(req, res, next) {});
router.delete('/:id', async function(req, res, next) {});

module.exports = router;
