const { Client } = require('pg');

// Connect to psql
const db = new Client({
  password: 'root',
  user: 'root',
  host: 'database'
});

module.exports = db;