const mysql = require('mysql');

// Setup MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root@localhost', // Change to your MySQL username
  password: 'drinkwater', // Change to your MySQL password
  database: 'sugarlytics' // Change to your database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database');
});

module.exports = connection;
