const fs = require('fs')
const filePath = "./tasks.json";

// Run this command to add a task:-->  node todo/todo.js add "buy milk"
// Run this command to list the task:-->  node todo/todo.js list

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath)
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (error) {
    return []
  }
}

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks)
  fs.writeFileSync(filePath, dataJSON)
}

const addTask = (task) => {
  const tasks = loadTasks()
  tasks.push({task})
  saveTasks(tasks)
  console.log("Task added ", task)
}

const listTasks = () => {
  const tasks = loadTasks()
  tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`))
}

const removeTask = (index) => {
  const tasks = loadTasks()
  tasks.splice(index, 1)
  saveTasks(tasks)
}

const command = process.argv[2]
const argument = process.argv[3]

if(command === 'add') {
  addTask(argument)
} else if(command === 'list'){
  listTasks()
} else if(command === 'remove'){
  removeTask(parseInt(argument))
} else {
  console.log("Error: Unknown command")
}