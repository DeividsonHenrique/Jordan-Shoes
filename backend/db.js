// db.js
const mysql = require('mysql2');

// Configura a conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root',
  password: '',
  database: 'jordan'
});

// Conectar ao MySQL
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});

module.exports = db;
