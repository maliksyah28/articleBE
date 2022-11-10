require("dotenv/config");
const express = require("express");
const bearerToken = require("express-bearer-token");
const PORT = process.env.PORT || 8000 || process.env.HerokuPort;
//database
console.log(PORT);
const client = require("../connection");

const app = express();
const cors = require("cors");

//router
const userRouter = require("./routers/user");
const articleRouter = require("./routers/article");

//config
app.use(express.json());
app.use(bearerToken());
app.use(cors());

app.use("/users", userRouter);
app.use("/article", articleRouter);

app.get("/", (req, res) => {
  res.send(`Hello, this is my API`);
});
app.use((error, req, res, next) => {
  console.log({ error });
  const errorObj = { status: "ERROR", message: error.message, detail: error };
  const httpCode = typeof error.code == "number" ? error.code : 500;
  res.status(httpCode).send(errorObj);
});
app.listen(PORT, (error) => {
  if (error) {
    console.log(`ERROR: ${error.message}`);
  } else {
    console.log(`APP RUNNING at  ${PORT} ✅`);
  }
});
