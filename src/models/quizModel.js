var database = require("../database/config");

// Quiz: relação 1:N com usuario (cada usuário pode responder ao quiz várias vezes).

function salvar(idUsuario, acertos, totalPerguntas) {
    var instrucaoSql = `
        INSERT INTO quiz_resultado (fk_usuario, acertos, total_perguntas)
        VALUES (?, ?, ?);
    `;
    return database.executar(instrucaoSql, [idUsuario, acertos, totalPerguntas]);
}

function listarPorUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT id, acertos, total_perguntas AS totalPerguntas,
               DATE_FORMAT(data_realizacao, '%d/%m/%Y %H:%i') AS data
        FROM quiz_resultado
        WHERE fk_usuario = ?
        ORDER BY data_realizacao DESC, id DESC;
    `;
    return database.executar(instrucaoSql, [idUsuario]);
}

function estatisticasResumo() {
    var instrucaoSql = `
        SELECT COUNT(*) AS tentativas,
               COALESCE(ROUND(AVG(acertos), 1), 0) AS media
        FROM quiz_resultado;
    `;
    return database.executar(instrucaoSql);
}

function contarPorAcertos() {
    var instrucaoSql = `
        SELECT acertos, COUNT(*) AS total
        FROM quiz_resultado
        GROUP BY acertos
        ORDER BY acertos ASC;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    salvar,
    listarPorUsuario,
    estatisticasResumo,
    contarPorAcertos
};
