const http = require("http");

const hostname = "127.0.0.1";
const port = 3000

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "plain/text");
    res.end("Hello Baloch");
  } else if (req.url === "/ice-tea") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "plain/text");
    res.end("Let's have an ice tea");
  } else if (req.url === "/black-tea") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "plain/text");
    res.end("Lets have a black tea");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 not found")
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is listening at http://${hostname}:${port}`)
})