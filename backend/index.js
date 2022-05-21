const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "admin",
  host: "database-2.cac7pmndkmeo.us-east-1.rds.amazonaws.com",
  password: "admin2705",
  database: "Ecom",
});

app.post("/register", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  console.log(email + " -- ");
  db.query(
    "INSERT INTO login (firstName, lastName,email,password) VALUES (?,?,?,?)",
    [firstName, lastName, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email + " -- ");
  db.query(
    "SELECT * from login WHERE email=? AND password=?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "wrong password /username" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("running server");
});
