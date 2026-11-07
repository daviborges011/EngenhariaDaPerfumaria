var database = require("../database/config");

// Os pontos de interrogação (?) são preenchidos pelo MySQL com os valores da lista.
// Assim, o que a pessoa digitar nunca vira parte do comando SQL.

function cadastrar(nome, email, senhaHash) {
    var instrucaoSql = "INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?);";
    return database.executar(instrucaoSql, [nome, email, senhaHash]);
}

function buscarPorEmail(email) {
    var instrucaoSql = "SELECT id, nome, email, senha FROM usuario WHERE email = ?;";
    return database.executar(instrucaoSql, [email]);
}

module.exports = {
    cadastrar,
    buscarPorEmail
};