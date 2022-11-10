require("dotenv").config();
var postgres = require("pg");
const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  HEROKUHOST,
  HEROKUUSER,
  HEROKUDATABASE,
  HEROKUPORT,
  HEROKUPASSWORD,
} = process.env;

module.exports = {
  development: {
    username: DB_USER || HEROKUUSER,
    password: "123Qazwsx!@#" || HEROKUPASSWORD,
    database: DB_NAME || HEROKUDATABASE,
    host: DB_HOST || HEROKUHOST,
    port: 5432 || HEROKUPORT,
    dialect: "postgres",

    dialectOptions: {
      bigNumberStrings: true,
    },
  },
};
