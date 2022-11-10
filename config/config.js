require("dotenv").config();
var postgres = require("pg");
const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  HerokuHost,
  HerokuUser,
  HerokuDatabase,
  HerokuPort,
  HerokuPassword,
} = process.env;

module.exports = {
  development: {
    username: DB_USER || HerokuUser,
    password: "123Qazwsx!@#" || HerokuPassword,
    database: DB_NAME || HerokuDatabase,
    host: DB_HOST || HerokuHost,
    port: 5432 || HerokuPort,
    dialect: "postgres",

    dialectOptions: {
      bigNumberStrings: true,
    },
  },
};
