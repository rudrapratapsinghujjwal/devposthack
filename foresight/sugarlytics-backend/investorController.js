const db = require('./db');

// Controller function to like an idea
const likeIdea = (req, res) => {
  const { idea_id, investor_id } = req.body;

  if (!idea_id || !investor_id) {
    return res.status(400).json({ error: 'Missing idea_id or investor_id' });
  }

  const query = 'INSERT INTO likes (idea_id, investor_id) VALUES (?, ?)';

  db.query(query, [idea_id, investor_id], (err, result) => {
    if (err) {
      console.error('Error liking idea:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.status(200).json({ message: 'Idea liked successfully!' });
  });
};

module.exports = { likeIdea };
