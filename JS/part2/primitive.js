// Number

let fees = 500;
let anotherFees = new Number(400) // output: [Number: 400]

// console.log(fees)
// console.log(anotherFees.valueOf())

// console.log(typeof fees)
// console.log(typeof(anotherFees))

// bool
let isActive = true;
let isReallyActive = new Boolean(true) // not recommended

// null and undefined
let firstName = null
// let lastName; // it prints undefined
let lastName = undefined;

// console.log(firstName)
// console.log(lastName)

// String
let fName = "Asim";
let lName = 'Ali';
let cast = `Baloch`;
let oldGreet = fName + " " + "Zamurani";
// console.log(oldGreet)

let greetMessage = `Hello ${fName}`;
// console.log(greetMessage)
let calculation = `Value is ${ 2 * 9 }`;
// console.log(calculation)

// Symbols
let sm1 = Symbol("Asim")
let sm2 = Symbol()

console.log(sm1 == sm2)
