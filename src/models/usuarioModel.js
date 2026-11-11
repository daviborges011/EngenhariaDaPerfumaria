var database = require("../database/config");

// Os pontos de interrogação (?) são preenchidos pelo MySQL com os valores da lista.
// Assim, o que a pessoa digitar nunca vira parte do comando SQL (evita SQL injection).

function cadastrar(nome, email, senhaHash) {
    var instrucaoSql = "INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?);";
    return database.executar(instrucaoSql, [nome, email, senhaHash]);
}

function buscarPorEmail(email) {
    var instrucaoSql = "SELECT id, nome, email, senha FROM usuario WHERE email = ?;";
    return database.executar(instrucaoSql, [email]);
}

// Dashboard: total de pessoas cadastradas
function contar() {
    var instrucaoSql = "SELECT COUNT(*) AS total FROM usuario;";
    return database.executar(instrucaoSql);
}

// Dashboard: últimas pessoas que se cadastraram
function listarRecentes(limite) {
    var instrucaoSql = `
        SELECT nome, DATE_FORMAT(data_cadastro, '%d/%m/%Y %H:%i') AS data
        FROM usuario
        ORDER BY data_cadastro DESC, id DESC
        LIMIT ?;
    `;
    return database.executar(instrucaoSql, [limite]);
}

// Dashboard: quantos cadastros por dia nos últimos 30 dias
function cadastrosPorDia() {
    var instrucaoSql = `
        SELECT DATE_FORMAT(data_cadastro, '%Y-%m-%d') AS dia, COUNT(*) AS total
        FROM usuario
        WHERE data_cadastro >= DATE_SUB(CURDATE(), INTERVAL 29 DAY)
        GROUP BY dia
        ORDER BY dia ASC;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    buscarPorEmail,
    contar,
    listarRecentes,
    cadastrosPorDia
};