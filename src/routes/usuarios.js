var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

// Recebe os dados do cadastro.html e do login.html
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

// Dados usados no index.html e no dashboard.html
router.get("/total", function (req, res) {
    usuarioController.total(req, res);
});

router.get("/recentes", function (req, res) {
    usuarioController.recentes(req, res);
});

router.get("/por-dia", function (req, res) {
    usuarioController.porDia(req, res);
});

module.exports = router;