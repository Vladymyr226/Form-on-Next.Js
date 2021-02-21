const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.user,
  host: "localhost",
  database: process.env.database,
  password: process.env.password,
  port: 5432,
  ssl: false,
});

module.exports = pool;
