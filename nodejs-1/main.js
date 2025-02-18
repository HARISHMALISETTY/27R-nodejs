const http = require("http");

const server = http.createServer((req, res) => {
  res.write("welcome to nodejs");
  res.end("");
});

server.listen("3101", "192.168.1.4", () => {
  console.log("server running");
});
