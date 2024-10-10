// index.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); // Importa a configuração do banco de dados

const app = express();

// Middleware para interpretar o corpo das requisições como JSON
app.use(bodyParser.json());

app.post('/register', (req, res) => {
  const { email, senha } = req.body;

  // Verifica se os dados foram fornecidos
  if (!email || !senha) {
    return res.status(400).send('Por favor, forneça email e senha');
  }

  // SQL para inserir os dados no banco
  const sql = 'INSERT INTO usuarios (email, senha) VALUES (?, ?)';

  // Executa o comando SQL, usando o email e a senha fornecidos
  db.query(sql, [email, senha], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      return res.status(500).send('Erro ao registrar o usuário');
    }

    res.status(201).send('Usuário registrado com sucesso!');
  });
});

// Porta onde o servidor irá rodar
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
