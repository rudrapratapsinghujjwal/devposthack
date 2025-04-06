const express = require('express');
const router = express.Router();
const { submitIdea, getIdeasByUser } = require('./ideaController');

// POST route to submit an idea
router.post('/submit', submitIdea);

// GET route to retrieve ideas by a specific user
router.get('/:user_id', getIdeasByUser);

module.exports = router;
