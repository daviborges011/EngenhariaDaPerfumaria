-- Banco do projeto "A Engenharia da Perfumaria"

CREATE DATABASE IF NOT EXISTS perfumaria;

USE perfumaria;

CREATE TABLE IF NOT EXISTS usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(80) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,                      -- guarda o hash da senha, nunca a senha pura
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP  -- alimenta o dashboard
);

