# Lanchonete API

Sistema de gestão para lanchonete — projeto de portfólio baseado em um
negócio real, com o objetivo de resolver problemas do dia a dia:
controle de cardápio, pedidos, estoque e faturamento.

## Status atual (Fase 1)

- [x] Setup do projeto Express
- [x] Conexão com Postgres (Supabase)
- [x] CRUD de Produtos
- [ ] CRUD de Insumos
- [ ] Pedidos e Itens de Pedido
- [ ] Login/Autenticação
- [ ] Frontend

## Como rodar localmente

1. Clone o repositório e instale as dependências:
   ```bash
   npm install
   ```

2. Crie um projeto no [Supabase](https://supabase.com), copie a
   Connection String em Project Settings > Database.

3. Copie `.env.example` para `.env` e preencha com sua connection string:
   ```bash
   cp .env.example .env
   ```

4. Rode o `schema.sql` no SQL Editor do Supabase para criar as tabelas
   e popular com dados de exemplo.

5. Inicie o servidor:
   ```bash
   npm run dev
   ```

6. Teste no navegador ou Insomnia/Postman: `http://localhost:3000`

## Rotas disponíveis

| Método | Rota           | Descrição              |
|--------|----------------|-------------------------|
| GET    | /produtos      | Lista todos os produtos |
| GET    | /produtos/:id  | Busca um produto        |
| POST   | /produtos      | Cria um produto         |
| PUT    | /produtos/:id  | Atualiza um produto     |
| DELETE | /produtos/:id  | Remove um produto       |

## Tecnologias

- Node.js + Express
- PostgreSQL (Supabase)
- (em breve) HTML/CSS/JS vanilla no frontend
