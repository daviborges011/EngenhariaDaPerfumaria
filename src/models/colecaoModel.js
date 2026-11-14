var database = require("../database/config");

// Coleção: liga usuario e perfume (N:N). Cada linha é "este usuário tem/quer este perfume".

function listar(idUsuario) {
    var instrucaoSql = `
        SELECT p.id AS idPerfume, p.nome, m.nome AS marca, p.familia, p.notas,
               c.status, c.ano_entrada AS ano, c.prioridade, c.comentario
        FROM colecao c
        JOIN perfume p ON p.id = c.fk_perfume
        JOIN marca m ON m.id = p.fk_marca
        WHERE c.fk_usuario = ?
        ORDER BY c.status ASC, c.ano_entrada ASC, p.nome ASC;
    `;
    return database.executar(instrucaoSql, [idUsuario]);
}

function adicionar(idUsuario, idPerfume, status, ano, prioridade, comentario) {
    var instrucaoSql = `
        INSERT INTO colecao (fk_usuario, fk_perfume, status, ano_entrada, prioridade, comentario)
        VALUES (?, ?, ?, ?, ?, ?);
    `;
    return database.executar(instrucaoSql, [idUsuario, idPerfume, status, ano, prioridade, comentario]);
}

function remover(idUsuario, idPerfume) {
    var instrucaoSql = "DELETE FROM colecao WHERE fk_usuario = ? AND fk_perfume = ?;";
    return database.executar(instrucaoSql, [idUsuario, idPerfume]);
}

module.exports = {
    listar,
    adicionar,
    remover
};