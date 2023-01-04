const express = require("express");
const bodyParser = require("body-parser");

const db = require("./db");

const app = express();

app.use(bodyParser.json());

app.get("/api/values", (req, res) => {
  db.pool.query("SELECT * FROM lists;", (err, results, fileds) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json(results);
  });
});

app.post("/api/value", (req, res) => {
  db.pool.query(
    `INSERT INTO lists (value) VALUES("${req.body.value}")`,
    (err, results, fileds) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.json({ success: true, value: req.body.value });
    }
  );
});

app.listen(5000, () => {
  console.log("server listened on 5000");
  console.log(db);
});
