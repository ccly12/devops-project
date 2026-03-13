const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'db',              
  user: process.env.DB_USER || 'myuser',
  password: process.env.DB_PASSWORD || 'mypassword',
  database: process.env.DB_NAME || 'mydb',
  port: 5432
});

module.exports = pool;