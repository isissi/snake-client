let connection;
const { KEYS } = require("./constants");

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    console.log("Thanks for playing, ciao!");
    process.exit();
  } 

  connection.write(KEYS[key]);
};


module.exports = setupInput;
