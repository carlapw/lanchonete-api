CREATE TABLE produtos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  categoria VARCHAR(50),
  preco DECIMAL(10,2) NOT NULL,
  disponivel BOOLEAN DEFAULT true,
  criado_em TIMESTAMP DEFAULT NOW()
);


INSERT INTO produtos (nome, categoria, preco, disponivel) VALUES
('X-Burger', 'Lanches', 15.00, true),
('X-Salada', 'Lanches', 17.00, true),
('Refrigerante Lata', 'Bebidas', 6.00, true),
('Batata Frita', 'Porcoes', 12.00, true);
