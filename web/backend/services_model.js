const pool = require("./config");
const path = require("path");
//fs - work with file-system
var fs = require("fs");

var counter = 1;

//writing data to an external file
function fileHandler(string) {
  var filename = path.join(
    "saved",
    new Date().toJSON().slice(0, 11) +
      new Date().getUTCHours() +
      "." +
      new Date().getUTCMinutes() +
      "." +
      new Date().getUTCSeconds() +
      "." +
      new Date().getUTCMilliseconds() +
      ".txt"
  );
  console.log(filename);

  fs.open(filename, "w", (err) => {
    if (err) throw err;
    console.log("File created");
  });
  fs.appendFile(filename, string, (err) => {
    if (err) throw err;
    console.log("Data has been added!");
  });
}

const createUser = (body) => {
  const { firstName, secondName, email, password, date, gender, tehno } = body;
  fileHandler(
    JSON.stringify({
      firstName,
      secondName,
      email,
      password,
      date,
      gender,
      tehno,
    })
  );

  return new Promise(function (resolve, reject) {
    console.log(firstName, secondName, email, password, date, gender, tehno);

    pool.query(
      "INSERT INTO users (name, surname, email, password, dateofbirth, sex, technologies) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [firstName, secondName, email, password, date, gender, tehno],
      (error, results) => {
        if (error) {
          reject(error);
        }
        console.log(results);
        if (results.rows[0].id) {
          resolve(`A new user has been added: ${results.rows[0].id},
            counter = ${counter++}`);
        } else {
          resolve("User not found");
        }
      }
    );
  });
};

const getUsers = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM users ORDER BY dateofbirth ASC",
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};

module.exports = {
  createUser,
  getUsers,
};
