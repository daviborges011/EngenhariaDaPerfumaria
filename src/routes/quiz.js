var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

// Resumo geral do quiz para o dashboard (precisa vir antes de /:idUsuario)
router.get("/resumo", function (req, res) {
    quizController.resumo(req, res);
});

// Lista as tentativas de um usuário
router.get("/:idUsuario", function (req, res) {
    quizController.listarPorUsuario(req, res);
});

// Salva uma nova tentativa do quiz
router.post("/", function (req, res) {
    quizController.salvar(req, res);
});

module.exports = router;
