let computer = {cpu: 12}
let lenovo = {
    screen: "HD",
    __proto__: computer
};
let tomHardware = {}

// Accessing prototype by dender proto dender
// console.log(`computer `, computer.__proto__)
// console.log(`lenovo `, lenovo.__proto__)


let genericCar = {tyres: 4}

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar)

// tyres is the property of genericCar object but still i can access it with tesla
// console.log(`tesla `, tesla.tyres)
console.log(`tesla `, Object.getPrototypeOf(tesla) )

console.log(`tesla `, Object.hasOwnProperty(tesla))