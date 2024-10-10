// db.js
const mysql = require('mysql2');

// Configura a conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost', // Endereço do servidor MySQL
  user: 'seu_usuario', // Usuário do banco de dados
  password: 'sua_senha', // Senha do banco de dados
  database: 'nome_do_banco' // Nome do banco de dados
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
