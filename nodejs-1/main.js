const http = require("http");

const server = http.createServer((req, res) => {
  res.write("welcome to nodejs");
  res.end("");
});

server.listen("3101", () => {
  console.log("server running");
});
