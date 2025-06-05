require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');          // <— NUEVO

const app = express();
app.use(cors());

// Endpoint de salud
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, msg: 'API dontirantes viva 🎉' });
});

// NUEVO: endpoint que devuelve la lista de productos
app.get('/api/productos', async (_req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM products ORDER BY id');
    res.json(rows);
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).json({ error: 'DB error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor listo en http://localhost:${PORT}`));
