// Import the filesystem module, `fs`, to enable file operations such as writing logs to a file
const fs = require("fs")

// Import the operating system module, `os`, to get information about the system's memory
const os = require("os")

// Import the EventEmitter class, which provides the ability to create and handle custom events
const EventEmitter = require("events")

// Destructure memoryUsage from the process module (though not used in this code)
const { memoryUsage } = require("process")

// Define a custom Logger class that extends EventEmitter
class Logger extends EventEmitter {
  // Define a log method that emits a "message" event with a message payload
  log(message) {
    this.emit("message", { message }) // Emit the "message" event with an object containing the message
  }
}

// Instantiate a Logger object to create an event-emitting logger
const logger = new Logger()

// Define the file where log messages will be stored
const logFile = "./eventlog.txt"

// Define a function to log events to a file when the "message" event is emitted
const logToFile = (event) => {
  // Format the log message with the current date and time, and the event's message
  const logMessage = `${new Date().toISOString()} - ${event.message}\n`
  
  // Append the log message to the specified log file
  fs.appendFileSync(logFile, logMessage)
}

// Set up a listener on the logger object to handle the "message" event and call logToFile
logger.on("message", logToFile)

// Use setInterval to repeatedly log memory usage every 3 seconds (3000 ms)
setInterval(() => {
  // Calculate current memory usage percentage (free memory / total memory * 100)
  const memoryUsage = (os.freemem() / os.totalmem()) * 100
  
  // Log the memory usage using the logger object, which triggers the "message" event
  logger.log(`Current memory usage: ${memoryUsage.toFixed(2)}`) // Fixed to two decimal places
}, 3000)

// Log initial messages to indicate application startup and a sample event
logger.log("Application started")
logger.log("Application event occurred")
