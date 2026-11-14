var database = require("../database/config");

// Marca: um perfume pertence a UMA marca, e uma marca tem VÁRIOS perfumes (1:N).
// Os pontos de interrogação (?) são preenchidos pelo MySQL com os valores da lista.

function criarMarca(nome) {
    // INSERT IGNORE: se a marca já existe (o nome é UNIQUE), não dá erro e não duplica
    var instrucaoSql = "INSERT IGNORE INTO marca (nome) VALUES (?);";
    return database.executar(instrucaoSql, [nome]);
}

function buscarMarca(nome) {
    var instrucaoSql = "SELECT id FROM marca WHERE nome = ?;";
    return database.executar(instrucaoSql, [nome]);
}

function buscarPerfume(nome, idMarca) {
    var instrucaoSql = "SELECT id FROM perfume WHERE nome = ? AND fk_marca = ?;";
    return database.executar(instrucaoSql, [nome, idMarca]);
}

function criarPerfume(nome, idMarca, familia, notas) {
    var instrucaoSql = "INSERT INTO perfume (nome, fk_marca, familia, notas) VALUES (?, ?, ?, ?);";
    return database.executar(instrucaoSql, [nome, idMarca, familia, notas]);
}

module.exports = {
    criarMarca,
    buscarMarca,
    buscarPerfume,
    criarPerfume
};