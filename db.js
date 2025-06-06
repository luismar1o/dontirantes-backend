const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false }   // necesario para Neon
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
