const connection = require('../public/js/db.js'); // Ajuste o caminho se necessário

connection.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) {
        console.error('Erro ao executar a query:', err);
        process.exit(1); // Sai com código de erro
    } else {
        console.log('Conexão bem-sucedida! Resultado:', results[0].solution);
        process.exit(0); // Sai com sucesso
    }
});
