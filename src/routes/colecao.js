var express = require("express");
var router = express.Router();

var colecaoController = require("../controllers/colecaoController");

// Lista a coleção de uma pessoa
router.get("/:idUsuario", function (req, res) {
    colecaoController.listar(req, res);
});

// Adiciona um perfume (cria marca e perfume se for preciso)
router.post("/", function (req, res) {
    colecaoController.adicionar(req, res);
});

// Remove um perfume da coleção
router.delete("/:idUsuario/:idPerfume", function (req, res) {
    colecaoController.remover(req, res);
});

module.exports = router;