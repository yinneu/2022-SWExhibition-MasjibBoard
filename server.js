const express = require("express");
const mysql = require("mysql");
const dbconfig = require("./config/database.js");
const connection = mysql.createConnection(dbconfig);
const app = express();

app.use(express.static(__dirname + "/"));

//configutration
app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("Root");
});

app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/users", (req, res) => {
  //connection.query("SELECT * from random_mj.mjlist", (error, rows) => {
  connection.query("SELECT * from Random_mj.MJList", (error, rows) => {
    if (error) throw error;
    console.log("User info is: ", rows);
    res.send(rows);
  });
});

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});
