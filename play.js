const { stdin } = require('process');
const connect = require('./client');
const {setupInput} = require('./input');



console.log("Connecting ...");
const conn = connect();
setupInput();





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
});

