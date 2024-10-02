// Checking if a number is greater than another number:

let num1 = 52;
let num2 = 10;

if (num1 > num2) {
    console.log("num1 is greater than num2");
} else {
    console.log("num1 is not greater than num2");
}

// Checking if a string is equal to another string:

let username = "baloch";
let anotherUsername = "baloch";

if (username == anotherUsername) {
    console.log("pick another username");
} else {
    console.log("you can use this username");
}

// Checking if a variable is a number or not:

let age = 12;

if (typeof age === "number") {
    console.log("This is a number");
} else {
    console.log("No: This is not a number bro");
}

// Checking if a boolean value is true of false:

let isActive = true;

if (isActive === true) {
    console.log("Yes: This is true bro");
} else {
    console.log("No: This is false bro");
}

// Checking if an array is empty or not:

let carsArray = [];

if (carsArray.length === 0) {
    console.log("This is an empty array")
} else {
    console.log("This is not an empty array")
}



// Array Methods and properties 

// let carItems = [];
// carItems.push("BMW", "Audi", "Mercedes");
// carItems.map((car) => console.log("I have a ",car))
// carItems.pop(); // remove the last element
// carItems.filter((car) => console.log("filter ", car))
// console.log(carItems);