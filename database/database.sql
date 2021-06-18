CREATE TABLE funcionarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(60) NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    funcao VARCHAR(20) NOT NULL,
    regime VARCHAR(5) NOT NULL,
    email VARCHAR(30) NOT NULL, 
    telefone1 VARCHAR(11) NOT NULL,
    telefone2 VARCHAR(11) ,
    cnpj VARCHAR(14) UNIQUE
);