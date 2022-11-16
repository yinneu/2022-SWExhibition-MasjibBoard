const express = require("express");
const mysql = require("mysql");
const dbconfig = require("./config/database.js");
const connection = mysql.createConnection(dbconfig);
const app = express();
app.use(express.static(__dirname + "/"));

//configutration
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  connection.query("SELECT * from random_mj.mjlist", (error, rows) => {
    if (error) throw error;
    res.render("index", { data: rows });
  });
});

app.get("/home", (req, res) => {
  connection.query("SELECT * from random_mj.mjlist", (error, rows) => {
    if (error) throw error;
    res.render("index", { data: rows });
  });
});

app.get("/cardList", (req, res) => {
  connection.query("SELECT * from random_mj.mjlist", (error, rows) => {
    if (error) throw error;
    res.render("cardList", { data: rows });
  });
});

app.get("/cardList/:id", (req, res) => {
  connection.query(
    `SELECT * from random_mj.mjlist where category like "%${req.params.id}%"`,
    (error, rows) => {
      if (error) throw error;
      res.render("cardList", { data: rows });
    }
  );
});

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});
