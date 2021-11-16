const { stdin } = require('process');
const connect = require('./client');
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);

  return stdin;
};


console.log("Connecting ...");
const conn = connect();


const handleUserInput = function (key) {
  if (key === "\u0003") {
    console.log("Thanks for playing, ciao!");
    process.exit();
  }
}

conn.on("connect", () => {

  // console.log('Move: up');
  stdin.on("data", (key) => {
    if (key === "a") {
      conn.write("Move: left");
    } else if (key === "s") {
      conn.write("Move: down");
    } else if (key === "d") {
      conn.write("Move: right");
    } else if (key === "w") {
      conn.write("Move: up");
    }
    
  });
  setupInput();
});

