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
  const { first, second, email, password, date, Gender, Tehno } = body;
  fileHandler(
    JSON.stringify({ first, second, email, password, date, Gender, Tehno })
  );

  return new Promise(function (resolve, reject) {
    console.log(first, second, email, password, date, Gender, Tehno);

    pool.query(
      "INSERT INTO users (name, surname, email, password, dateofbirth, sex, technologies) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [first, second, email, password, date, Gender, Tehno],
      (error, results) => {
        if (error) {
          reject(error);
        }
        try {
          console.log(results);

          resolve(`A new user has been added: ${results.rows[0].id},
                    counter = ${counter++}`);
        } catch {
          resolve(`User not found`);
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
