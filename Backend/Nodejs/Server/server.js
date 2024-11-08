const http = require("http")
const path = require("path")
const fs = require("fs")

const port = 8000;

const server = http.createServer((req, res) => {
  // __dirname gives the current working directory
  const filePath = path.join(__dirname, req.url === "/" ? "index.html" 
    : req.url
  )

    console.log(filePath)

    const extName = String(path.extname(filePath)).toLowerCase()

    const mimeType = {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "text/javascript",
      ".png": "text/png",
    }

    const contentType = mimeType[extName] || "application/octet-stream"

    fs.readFile(filePath, (err, content) => {
      if (err) {
        if(err.code === "ENOENT") {
          res.writeHead(404, {"ContentType": "text/html"})
          res.end("404: File Not Found Bro")
        }
      } else {
        res.writeHead(200, {'Content-Type': contentType}) // head part
        res.end(content, 'utf-8') // body part
      }
    })
});

server.listen(port, () => {
  console.log(`Server listening on ${port}`)
})