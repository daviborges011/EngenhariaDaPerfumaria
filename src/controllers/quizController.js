var quizModel = require("../models/quizModel");

function salvar(req, res) {
    var idUsuario = Number(req.body.idUsuario);
    var acertos = Number(req.body.acertos);
    var totalPerguntas = Number(req.body.totalPerguntas);

    if (!Number.isInteger(idUsuario) || idUsuario < 1) {
        res.status(400).send("Entre na sua conta para salvar o resultado do quiz.");
    } else if (!Number.isInteger(totalPerguntas) || totalPerguntas < 1 || totalPerguntas > 20) {
        res.status(400).send("Quantidade de perguntas inválida.");
    } else if (!Number.isInteger(acertos) || acertos < 0 || acertos > totalPerguntas) {
        res.status(400).send("Quantidade de acertos inválida.");
    } else {
        quizModel.salvar(idUsuario, acertos, totalPerguntas)
            .then(function () {
                res.status(201).json({ mensagem: "Resultado do quiz salvo!" });
            })
            .catch(function (erro) {
                console.log("Erro ao salvar resultado do quiz:", erro.sqlMessage || erro);
                if (erro.code == "ER_NO_REFERENCED_ROW_2") {
                    res.status(400).send("Usuário não encontrado. Entre na conta novamente.");
                } else {
                    res.status(500).send("Não foi possível salvar o resultado do quiz.");
                }
            });
    }
}

function resumo(req, res) {
    Promise.all([
        quizModel.estatisticasResumo(),
        quizModel.contarPorAcertos()
    ])
        .then(function (resultados) {
            var geral = resultados[0][0] || { tentativas: 0, media: 0 };
            var porAcertos = resultados[1] || [];
            res.json({
                tentativas: Number(geral.tentativas) || 0,
                media: Number(geral.media) || 0,
                porAcertos: porAcertos
            });
        })
        .catch(function (erro) {
            console.log("Erro ao buscar resumo do quiz:", erro.sqlMessage || erro);
            res.status(500).send("Erro ao buscar os dados do quiz.");
        });
}

function listarPorUsuario(req, res) {
    var idUsuario = Number(req.params.idUsuario);

    if (!Number.isInteger(idUsuario) || idUsuario < 1) {
        res.status(400).send("Usuário inválido.");
    } else {
        quizModel.listarPorUsuario(idUsuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log("Erro ao listar quiz do usuário:", erro.sqlMessage || erro);
                res.status(500).send("Não foi possível carregar seu histórico do quiz.");
            });
    }
}

module.exports = {
    salvar,
    resumo,
    listarPorUsuario
};
