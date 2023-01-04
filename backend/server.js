const express = require("express");
const bodyParser = require("body-parser");

const db = require("./db");

const app = express();

app.use(bodyParser.json());

app.listen(5000, () => {
  console.log("server listened on 5000");
  console.log(db);
});
