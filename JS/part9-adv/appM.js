            
                /* <<<<--- ** MODULE IMPORT FILE ** --->>>> */

// default import
import multiply from "./mathOperationsM.js";

// named import
import { add, subtract } from "./mathOperationsM.js" // you need to use the extension .js because sometimes it give error for the extension 

console.log(multiply(5, 5))
console.log(add(4, 6))
console.log(subtract(4, 6))