var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.get("/:idUsuario", function (req, res) {
    perfilController.buscar(req, res);
});

router.post("/", function (req, res) {
    perfilController.salvar(req, res);
});

module.exports = router;