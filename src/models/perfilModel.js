var database = require("../database/config");

// Perfil: relação 1:1 com usuario (cada usuário tem no máximo um perfil).

function buscar(idUsuario) {
    var instrucaoSql = "SELECT cidade, sobre, familia_favorita AS familia FROM perfil WHERE fk_usuario = ?;";
    return database.executar(instrucaoSql, [idUsuario]);
}

function salvar(idUsuario, cidade, sobre, familia) {
    // Como fk_usuario é UNIQUE: se o perfil ainda não existe, cria; se já existe, atualiza.
    var instrucaoSql = `
        INSERT INTO perfil (fk_usuario, familia_favorita, cidade, sobre)
        VALUES (?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
            familia_favorita = VALUES(familia_favorita),
            cidade = VALUES(cidade),
            sobre = VALUES(sobre);
    `;
    return database.executar(instrucaoSql, [idUsuario, familia, cidade, sobre]);
}

module.exports = {
    buscar,
    salvar
};