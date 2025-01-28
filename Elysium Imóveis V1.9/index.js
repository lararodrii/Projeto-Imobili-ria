const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db.js');

const app = express();
const PORT = 3000;

// Configurações
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rota da tela de login
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

// Rota para autenticar usuário
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

    db.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Erro ao consultar o banco de dados:', err);
            return res.status(500).send('Erro interno no servidor.');
        }

        if (results.length > 0) {
            // Redireciona para a página após login bem-sucedido
            console.log('Login bem-sucedido:', username);
            res.redirect('/dashboard'); // Redireciona para o dashboard
        } else {
            // Exibe a mensagem de erro
            console.log('Credenciais inválidas:', username);
            res.send(`
                <h1>Usuário ou senha inválidos!</h1>
                <a href="/">Voltar</a> 
            `);
        }
    });
});

// Rota para o Dashboard
app.get('/dashboard', (req, res) => {
    res.sendFile(__dirname + '/views/dashboard.html'); // Serve o arquivo dashboard.html
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
