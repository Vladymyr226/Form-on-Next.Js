const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "BackendFormDataBase",
  password: "123123",
  port: 5432,
  ssl: false,
});

module.exports = pool;
