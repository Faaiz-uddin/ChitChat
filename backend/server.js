const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
// const dbConnectionString = process.env.DB_CONNECTION_STRING;
app.get("/", (req, res) => {
  res.send("Welcome Faaiz!");
});

app.listen(port, (req, res) => {
  console.log(`listening on port ${port}`);
});
