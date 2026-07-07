const express = require('express');
const router = express.Router();
const pool = require('../config/db');


router.get('/', async (req, res) => {
  try {
    const resultado = await pool.query(
      'SELECT * FROM produtos ORDER BY id ASC'
    );
    res.json(resultado.rows);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Erro ao buscar produtos' });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await pool.query(
      'SELECT * FROM produtos WHERE id = $1',
      [id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({ erro: 'Produto nao encontrado' });
    }

    res.json(resultado.rows[0]);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Erro ao buscar produto' });
  }
});


router.post('/', async (req, res) => {
  try {
    const { nome, categoria, preco, disponivel } = req.body;

    if (!nome || preco === undefined) {
      return res.status(400).json({ erro: 'nome e preco sao obrigatorios' });
    }

    const resultado = await pool.query(
      `INSERT INTO produtos (nome, categoria, preco, disponivel)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [nome, categoria, preco, disponivel ?? true]
    );

    res.status(201).json(resultado.rows[0]);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Erro ao criar produto' });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, categoria, preco, disponivel } = req.body;

    const resultado = await pool.query(
      `UPDATE produtos
       SET nome = $1, categoria = $2, preco = $3, disponivel = $4
       WHERE id = $5 RETURNING *`,
      [nome, categoria, preco, disponivel, id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({ erro: 'Produto nao encontrado' });
    }

    res.json(resultado.rows[0]);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Erro ao atualizar produto' });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await pool.query(
      'DELETE FROM produtos WHERE id = $1 RETURNING *',
      [id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({ erro: 'Produto nao encontrado' });
    }

    res.json({ mensagem: 'Produto removido com sucesso' });
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Erro ao remover produto' });
  }
});

module.exports = router;
