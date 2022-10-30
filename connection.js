const { Client } = require("pg");
const { Sequelize } = require("sequelize");
const postgresql = new Sequelize("postgres://user:postgres:5432/Article", {
  define: {
    timestamps: false,
  },
});

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "123Qazwsx!@#",
  database: "Article",
  define: {
    timestamps: false,
  },
});

module.exports = client;
module.exports = postgresql;
