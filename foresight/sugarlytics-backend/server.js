const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes (assuming both files are directly in the sugarlytics-backend folder)
const ideaRoutes = require('./ideaRoutes');
const investorRoutes = require('./investorRoutes');

// Use the routes
app.use('/api/ideas', ideaRoutes);
app.use('/api/investors', investorRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
