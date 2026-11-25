CREATE DATABASE IF NOT EXISTS individual;

USE individual;

-- Tabela Usuario
CREATE TABLE IF NOT EXISTS usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(80) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela perfil
CREATE TABLE IF NOT EXISTS perfil (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT NOT NULL UNIQUE,
    familia_favorita ENUM('Amadeirado', 'Cítrico', 'Floral', 'Oriental', 'Aromático', 'Gourmand', 'Fresco') NULL,
    cidade VARCHAR(50),
    sobre VARCHAR(200),
    CONSTRAINT fk_perfil_usuario FOREIGN KEY (fk_usuario)
        REFERENCES usuario (id)
);

-- Tabela marca
CREATE TABLE IF NOT EXISTS marca (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(40) NOT NULL UNIQUE,
    pais VARCHAR(30)
);

-- Tabela perfume
CREATE TABLE IF NOT EXISTS perfume (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(60) NOT NULL,
    fk_marca INT NOT NULL,
    familia ENUM('Amadeirado', 'Cítrico', 'Floral', 'Oriental', 'Aromático', 'Gourmand', 'Fresco') NOT NULL,
    notas VARCHAR(100),                                 -- ex.: Madeiras, Ameixa, Baunilha
    volume_ml INT NULL,
    preco DECIMAL(8,2) NULL,
    frase VARCHAR(200),
    UNIQUE (nome, fk_marca),
    CONSTRAINT fk_perfume_marca FOREIGN KEY (fk_marca)
        REFERENCES marca (id)
);

-- Tabela colecao
CREATE TABLE IF NOT EXISTS colecao (
    fk_usuario INT NOT NULL,
    fk_perfume INT NOT NULL,
    status ENUM('tenho', 'desejo') NOT NULL DEFAULT 'tenho',
    ano_entrada INT NULL,
    prioridade INT NULL,                                  -- 1 a 5, para a lista de desejos
    comentario VARCHAR(200),
    data_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (fk_usuario, fk_perfume),
    CONSTRAINT fk_colecao_usuario FOREIGN KEY (fk_usuario)
        REFERENCES usuario (id),
    CONSTRAINT fk_colecao_perfume FOREIGN KEY (fk_perfume)
        REFERENCES perfume (id)
);

-- Tabela para guardar as tentativas e acertos do quiz (1:N com usuario)
CREATE TABLE IF NOT EXISTS quiz_resultado (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT NOT NULL,
    acertos INT NOT NULL,
    total_perguntas INT NOT NULL,
    data_realizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_quiz_usuario FOREIGN KEY (fk_usuario)
        REFERENCES usuario (id)
);

-- =====================================================================
-- DADOS DE EXEMPLO
-- =====================================================================

INSERT IGNORE INTO marca (nome, pais) VALUES
('O Boticário', 'Brasil');

-- O seu primeiro perfume
INSERT IGNORE INTO perfume (nome, fk_marca, familia, notas, frase)
SELECT 'Malbec Clássico', m.id, 'Amadeirado', 'Madeiras, Ameixa, Baunilha', 'Meu primeiro perfume, presente da minha mãe.'
FROM marca AS m
WHERE m.nome = 'O Boticário';

INSERT IGNORE INTO colecao (fk_usuario, fk_perfume, status, ano_entrada, comentario)
SELECT u.id, p.id, 'tenho', 2021, 'Presente da minha mãe.'
FROM usuario AS u, perfume AS p
WHERE u.email = 'seu-email@exemplo.com' AND p.nome = 'Malbec Clássico';

INSERT IGNORE INTO perfil (fk_usuario, familia_favorita, sobre)
SELECT u.id, 'Amadeirado', 'Apaixonado por perfumes desde 2021.'
FROM usuario AS u
WHERE u.email = 'seu-email@exemplo.com';

INSERT INTO quiz_resultado (fk_usuario, acertos, total_perguntas)
SELECT u.id, 4, 5
FROM usuario AS u
WHERE u.email = 'seu-email@exemplo.com';

-- =====================================================================
-- CONSULTAS PARA TESTAR (e mostrar na apresentação) OS RELACIONAMENTOS
-- =====================================================================

SELECT * FROM colecao;
SELECT * FROM marca;
SELECT * FROM perfil;
SELECT * FROM perfume;
SELECT * FROM usuario;
SELECT * FROM quiz_resultado;

-- 1:N  Perfumes com a marca
SELECT p.nome AS perfume, m.nome AS marca, p.familia, p.notas
FROM perfume AS p
JOIN marca AS m ON m.id = p.fk_marca;

-- N:N  Coleção de cada usuário
SELECT u.nome AS usuario, p.nome AS perfume, c.status, c.ano_entrada
FROM colecao AS c
JOIN usuario AS u ON u.id = c.fk_usuario
JOIN perfume AS p ON p.id = c.fk_perfume
ORDER BY u.nome, c.ano_entrada;

-- N:N  (sentido contrário) Quantas pessoas têm ou desejam cada perfume
SELECT p.nome AS perfume, COUNT(c.fk_usuario) AS pessoas
FROM perfume AS p
LEFT JOIN colecao AS c ON c.fk_perfume = p.id
GROUP BY p.id, p.nome
ORDER BY pessoas DESC, p.nome;

-- 1:1  Usuário com o perfil (LEFT JOIN mostra também quem ainda não tem perfil)
SELECT u.nome, pf.cidade, pf.sobre, pf.familia_favorita
FROM usuario AS u
LEFT JOIN perfil pf ON pf.fk_usuario = u.id;

-- 1:N  Tentativas do quiz por usuário
SELECT u.nome, q.acertos, q.total_perguntas, q.data_realizacao
FROM quiz_resultado AS q
JOIN usuario AS u ON u.id = q.fk_usuario
ORDER BY q.data_realizacao DESC;

-- Agregação para o dashboard: quantos perfumes por família
SELECT familia, COUNT(*) AS total
FROM perfume
GROUP BY familia
ORDER BY total DESC, familia;
