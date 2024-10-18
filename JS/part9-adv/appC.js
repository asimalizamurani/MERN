
         /* <<<<--- ** COMMON IMPORT FILE ** --->>>> */

// const mathOperation = require("./mathOperationC.js")
const { add, subtract, multiply } = require("./mathOperationC.js")

// console.log(mathOperation.add(5, 5))
// console.log(mathOperation.subtract(4, 6))
// console.log(mathOperation.multiply(5, 4))

console.log(add(5, 5))
console.log(subtract(4,6))
console.log(multiply(4, 6))