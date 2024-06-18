const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const authRoutes = require('./routes/auth');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'health_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
