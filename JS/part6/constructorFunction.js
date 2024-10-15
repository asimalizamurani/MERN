function Person(name, age) {
    this.name = name
    this.age = age
}

function Car(make, model) {
    this.make = make
    this.model = model
}

let myCar = new Car("Toyota", "Parado");
// console.log(myCar)

let yourCar = new Car("Tesla", "Roadster")
// console.log(yourCar)

function Tea(type) {
    this.type = type
    this.describe = function () {
        return `This is a cup of ${this.type}`
    }
}

let lemonTea = new Tea("Lemon tea")
// console.log(lemonTea.describe())

function Animal(species) {
    this.species = species
}

Animal.prototype.sound = function() {
    return `${this.species} makes a sound`
}

let dog = new Animal("Dog")
// console.log(dog.sound())

let cat = new Animal("Cat")
// console.log(cat.sound())


function Drink(name) {
    if(!new.target) {
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name
}

let tea = new Drink("tea");
let coffee = new Drink("coffee");k