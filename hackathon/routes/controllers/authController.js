const db = require('../server').db;

exports.login = (req, res) => {
  const { cpf, senha } = req.body;
  const query = 'SELECT * FROM users WHERE cpf = ? AND senha = ?';
  db.query(query, [cpf, senha], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
};

exports.register = (req, res) => {
  const { cpf, senha } = req.body;
  const query = 'INSERT INTO users (cpf, senha) VALUES (?, ?)';
  db.query(query, [cpf, senha], (err, result) => {
    if (err) throw err;
    res.status(201).send('User registered');
  });
};
