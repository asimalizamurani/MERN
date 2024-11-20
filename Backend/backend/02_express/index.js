import express from "express"

import logger from "./logger.js";
import morgan from "morgan";

const app = express();

const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

// logger messages
// logger.info("This is a info message")
// logger.warn("This is a warning message")
// logger.error("This is an error message")
// logger.debug("This is a debug message")

const port = 8000;
app.use(express.json());

let teaData = [];
let nextId = 1;

// create a new tea
app.post("/tea", (req, res) => {
  logger.info("A post request is made to add a new tea")
  const {name, price} = req.body
  const newTea = {id: nextId++, name, price}
  teaData.push(newTea)
  res.status(201).send(newTea)
})

// Get all teas
app.get("/teas", (req, res) => {
  res.status(201).send(teaData)
})

// Get a specific tea by ID
app.get("/teas/:id", (req, res) => {
    const tea = teaData.find(t => t.id === parseInt(req.params.id))

    if(!tea) {
      return res.status(404).send("Tea not found")
    }

    res.status(200).send(tea)
})

// update tea

app.put("/teas/:id", (req, res) => {
  const tea = teaData.find(t => t.id === parseInt(req.params.id));

  if(!tea) {
    return res.status(404).send("Tea not found")
  }

  const {name, price} = req.body
  tea.name = name;
  tea.price = price
  res.status(200).send(tea)
})

// Delete tea

app.delete("/teas/:id", (req, res) => {
  const teaIndex = teaData.findIndex(t => t.id === parseInt(req.params.id))

  if(teaIndex === -1) {
    return res.status(404).send("Tea not found")
  }

  teaData.splice(teaIndex, 1)
  res.status(200).send("tea deleted")
})



app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})