const express = require("express");
const app = express();
const services_model = require("./services_model");
var fs = require("fs");
const PORT = 3001;
app.use(express.json());
//Header files
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

//for post users in db
app.post("/user", (req, res) => {
  services_model
    .createUser(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

//for get list from db
app.get("/", (req, res) => {
  services_model
    .getUsers()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
