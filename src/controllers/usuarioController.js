var usuarioModel = require("../models/usuarioModel");
var crypto = require("crypto"); // já vem com o Node.js

// A senha nunca é guardada pura: guardamos "sal:hash".
function gerarHash(senha) {
    var sal = crypto.randomBytes(16).toString("hex");
    var hash = crypto.scryptSync(senha, sal, 64).toString("hex");
    return sal + ":" + hash;
}

function conferirSenha(senha, guardado) {
    var partes = String(guardado).split(":");
    if (partes.length != 2) {
        return false;
    }
    var hashGuardado = Buffer.from(partes[1], "hex");
    var hashTentativa = crypto.scryptSync(senha, partes[0], 64);
    return hashGuardado.length == hashTentativa.length && crypto.timingSafeEqual(hashGuardado, hashTentativa);
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (typeof nome != "string" || nome.trim() == "") {
        res.status(400).send("Informe o seu nome.");
    } else if (nome.trim().length > 50) {
        res.status(400).send("O nome pode ter no máximo 50 caracteres.");
    } else if (typeof email != "string" || email.indexOf("@") == -1 || email.length > 80) {
        res.status(400).send("Informe um e-mail válido.");
    } else if (typeof senha != "string" || senha.length < 8) {
        res.status(400).send("A senha precisa ter pelo menos 8 caracteres.");
    } else {
        usuarioModel.cadastrar(nome.trim(), email.trim().toLowerCase(), gerarHash(senha))
            .then(function () {
                res.status(201).json({ mensagem: "Cadastro realizado com sucesso!" });
            })
            .catch(function (erro) {
                console.log("Erro ao cadastrar:", erro.sqlMessage || erro);
                if (erro.code == "ER_DUP_ENTRY") {
                    res.status(409).send("Este e-mail já está cadastrado.");
                } else {
                    res.status(500).send("Não foi possível criar a conta. Tente novamente.");
                }
            });
    }
}

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (typeof email != "string" || typeof senha != "string") {
        res.status(400).send("Informe e-mail e senha.");
    } else {
        usuarioModel.buscarPorEmail(email.trim().toLowerCase())
            .then(function (resultado) {
                if (resultado.length == 1 && conferirSenha(senha, resultado[0].senha)) {
                    // a senha NUNCA é devolvida ao navegador
                    res.json({
                        id: resultado[0].id,
                        nome: resultado[0].nome,
                        email: resultado[0].email
                    });
                } else {
                    res.status(403).send("E-mail e/ou senha inválido(s).");
                }
            })
            .catch(function (erro) {
                console.log("Erro ao fazer login:", erro.sqlMessage || erro);
                res.status(500).send("Não foi possível entrar. Tente novamente.");
            });
    }
}

module.exports = {
    cadastrar,
    autenticar
};