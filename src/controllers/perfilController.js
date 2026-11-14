var perfilModel = require("../models/perfilModel");
var familias = require("../familias");

function buscar(req, res) {
    var idUsuario = Number(req.params.idUsuario);

    if (!Number.isInteger(idUsuario) || idUsuario < 1) {
        res.status(400).send("Usuário inválido.");
    } else {
        perfilModel.buscar(idUsuario)
            .then(function (resultado) {
                if (resultado.length == 0) {
                    // a pessoa ainda não preencheu o perfil
                    res.json({ cidade: "", sobre: "", familia: "" });
                } else {
                    res.json({
                        cidade: resultado[0].cidade || "",
                        sobre: resultado[0].sobre || "",
                        familia: resultado[0].familia || ""
                    });
                }
            })
            .catch(function (erro) {
                console.log("Erro ao buscar o perfil:", erro.sqlMessage || erro);
                res.status(500).send("Não foi possível carregar o perfil.");
            });
    }
}

function salvar(req, res) {
    var idUsuario = Number(req.body.idUsuario);
    var cidade = req.body.cidade;
    var sobre = req.body.sobre;
    var familia = req.body.familia;

    // campos vazios viram null no banco
    if (cidade === undefined || cidade === null) { cidade = ""; }
    if (sobre === undefined || sobre === null) { sobre = ""; }
    if (familia === undefined || familia === null) { familia = ""; }

    if (!Number.isInteger(idUsuario) || idUsuario < 1) {
        res.status(400).send("Entre na sua conta para salvar o perfil.");
    } else if (typeof cidade != "string" || cidade.trim().length > 50) {
        res.status(400).send("A cidade aceita até 50 caracteres.");
    } else if (typeof sobre != "string" || sobre.trim().length > 200) {
        res.status(400).send("O texto sobre você aceita até 200 caracteres.");
    } else if (familia !== "" && familias.indexOf(familia) == -1) {
        res.status(400).send("Escolha uma família olfativa da lista.");
    } else {
        perfilModel.salvar(
            idUsuario,
            cidade.trim() == "" ? null : cidade.trim(),
            sobre.trim() == "" ? null : sobre.trim(),
            familia == "" ? null : familia
        )
            .then(function () {
                res.json({ mensagem: "Perfil salvo!" });
            })
            .catch(function (erro) {
                console.log("Erro ao salvar o perfil:", erro.sqlMessage || erro);
                if (erro.code == "ER_NO_REFERENCED_ROW_2") {
                    res.status(400).send("Usuário não encontrado. Entre na conta novamente.");
                } else {
                    res.status(500).send("Não foi possível salvar o perfil.");
                }
            });
    }
}

module.exports = {
    buscar,
    salvar
};