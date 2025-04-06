const express = require('express');
const router = express.Router();
const { likeIdea } = require('./investorController');

// POST route to like an idea
router.post('/like', likeIdea);

module.exports = router;
