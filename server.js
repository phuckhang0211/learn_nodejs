const http = require("http"); //node.js

const port = 3000;
const hostname = "127.0.0.1"; //localhost

const server = http.createServer((req, res) => {
  res.end("Hello world");
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
