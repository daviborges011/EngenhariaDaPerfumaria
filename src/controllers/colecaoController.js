var colecaoModel = require("../models/colecaoModel");
var perfumeModel = require("../models/perfumeModel");
var familias = require("../familias");

// Texto opcional: vazio vira null; se não for texto ou passar do tamanho, vira undefined (inválido).
function textoOuNulo(valor, maximo) {
    if (valor === undefined || valor === null || valor === "") {
        return null;
    }
    if (typeof valor != "string" || valor.trim().length > maximo) {
        return undefined;
    }
    return valor.trim();
}

// Número opcional: vazio vira null; se não for número, vira undefined (inválido).
function numeroOuNulo(valor) {
    if (valor === undefined || valor === null || valor === "") {
        return null;
    }
    var n = Number(valor);
    return isNaN(n) ? undefined : n;
}

// Adiciona um perfume à coleção da pessoa. Passa por 3 tabelas:
// marca (cria se não existir) -> perfume (cria se não existir) -> colecao (liga a pessoa ao perfume)
function adicionar(req, res) {
    var idUsuario = Number(req.body.idUsuario);
    var nome = textoOuNulo(req.body.nome, 60);
    var marca = textoOuNulo(req.body.marca, 40);
    var familia = req.body.familia;
    var notas = textoOuNulo(req.body.notas, 100);
    var comentario = textoOuNulo(req.body.comentario, 200);
    var status = req.body.status;
    var ano = numeroOuNulo(req.body.ano);
    var prioridade = numeroOuNulo(req.body.prioridade);

    if (!Number.isInteger(idUsuario) || idUsuario < 1) {
        res.status(400).send("Entre na sua conta para usar a coleção.");
    } else if (!nome) {
        res.status(400).send("Informe o nome do perfume (até 60 caracteres).");
    } else if (!marca) {
        res.status(400).send("Informe a marca (até 40 caracteres).");
    } else if (familias.indexOf(familia) == -1) {
        res.status(400).send("Escolha uma família olfativa da lista.");
    } else if (notas === undefined || comentario === undefined) {
        res.status(400).send("As notas aceitam até 100 caracteres e o comentário até 200.");
    } else if (status != "tenho" && status != "desejo") {
        res.status(400).send("Escolha se você tem o perfume ou se quer ter.");
    } else if (ano === undefined || (ano !== null && (!Number.isInteger(ano) || ano < 1990 || ano > 2100))) {
        res.status(400).send("Informe um ano válido (entre 1990 e 2100).");
    } else if (prioridade === undefined || (prioridade !== null && (!Number.isInteger(prioridade) || prioridade < 1 || prioridade > 5))) {
        res.status(400).send("A prioridade vai de 1 a 5.");
    } else {
        // o ano vale para quem tem; a prioridade vale para quem quer ter
        if (status == "desejo") {
            ano = null;
        } else {
            prioridade = null;
        }

        var idMarca;

        perfumeModel.criarMarca(marca)
            .then(function () {
                return perfumeModel.buscarMarca(marca);
            })
            .then(function (resultadoMarca) {
                idMarca = resultadoMarca[0].id;
                return perfumeModel.buscarPerfume(nome, idMarca);
            })
            .then(function (resultadoPerfume) {
                if (resultadoPerfume.length > 0) {
                    return resultadoPerfume[0].id; // o perfume já existe: reaproveita
                }
                return perfumeModel.criarPerfume(nome, idMarca, familia, notas)
                    .then(function () {
                        return perfumeModel.buscarPerfume(nome, idMarca);
                    })
                    .then(function (criado) {
                        return criado[0].id;
                    });
            })
            .then(function (idPerfume) {
                return colecaoModel.adicionar(idUsuario, idPerfume, status, ano, prioridade, comentario);
            })
            .then(function () {
                res.status(201).json({ mensagem: "Perfume adicionado à coleção!" });
            })
            .catch(function (erro) {
                console.log("Erro ao adicionar na coleção:", erro.sqlMessage || erro);
                if (erro.code == "ER_DUP_ENTRY") {
                    res.status(409).send("Este perfume já está na sua coleção.");
                } else if (erro.code == "ER_NO_REFERENCED_ROW_2") {
                    res.status(400).send("Usuário não encontrado. Entre na conta novamente.");
                } else {
                    res.status(500).send("Não foi possível adicionar o perfume. Tente novamente.");
                }
            });
    }
}

function listar(req, res) {
    var idUsuario = Number(req.params.idUsuario);

    if (!Number.isInteger(idUsuario) || idUsuario < 1) {
        res.status(400).send("Usuário inválido.");
    } else {
        colecaoModel.listar(idUsuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log("Erro ao listar a coleção:", erro.sqlMessage || erro);
                res.status(500).send("Não foi possível carregar a coleção.");
            });
    }
}

function remover(req, res) {
    var idUsuario = Number(req.params.idUsuario);
    var idPerfume = Number(req.params.idPerfume);

    if (!Number.isInteger(idUsuario) || idUsuario < 1 || !Number.isInteger(idPerfume) || idPerfume < 1) {
        res.status(400).send("Dados inválidos.");
    } else {
        colecaoModel.remover(idUsuario, idPerfume)
            .then(function (resultado) {
                if (resultado.affectedRows == 0) {
                    res.status(404).send("Esse perfume não está na sua coleção.");
                } else {
                    res.json({ mensagem: "Perfume removido da coleção." });
                }
            })
            .catch(function (erro) {
                console.log("Erro ao remover da coleção:", erro.sqlMessage || erro);
                res.status(500).send("Não foi possível remover o perfume.");
            });
    }
}

module.exports = {
    adicionar,
    listar,
    remover
};