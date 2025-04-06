const db = require('./db');

// Controller function to submit a new idea
const submitIdea = (req, res) => {
  const { title, description, user_id } = req.body;

  if (!title || !description || !user_id) {
    return res.status(400).json({ error: 'Missing title, description, or user_id' });
  }

  const query = 'INSERT INTO ideas (title, description, user_id) VALUES (?, ?, ?)';

  db.query(query, [title, description, user_id], (err, result) => {
    if (err) {
      console.error('Error submitting idea:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.status(200).json({ message: 'Idea submitted successfully!' });
  });
};

// Controller function to retrieve ideas by user ID
const getIdeasByUser = (req, res) => {
  const user_id = req.params.user_id;

  const query = 'SELECT * FROM ideas WHERE user_id = ?';

  db.query(query, [user_id], (err, result) => {
    if (err) {
      console.error('Error retrieving ideas:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.status(200).json(result);
  });
};

module.exports = { submitIdea, getIdeasByUser };
