let car = {
    make: "Toyota",
    model: "Parado",
    year: "2020",
    start: function () {
        return `${this.make} car got started in ${this.year}`
    }
}

// console.log(car.start())

function Person(name, age) {
    this.name = name
    this.age = age
}

let asim = new Person("Asim Ali", 21);
// console.log(asim.name)


function Animal(type) {
    this.type = type
}

// Prototype chain
Animal.prototype.sound = function() {
    return `${this.type} makes sound`
}

Array.prototype.asim = function() {
    return `custom method ${this}`
}

let myArray = [1, 2, 3]
// console.log(myArray.asim())

let myNewArray = [1, 2, 3, 4, 5, 6];
// console.log(myNewArray.asim())



class Vehicle {
    constructor(make, model) {
        this.make = make
        this.model = model
    }

    start () {
        return `${this.model} is a car from ${this.make}`
    }
}

class Car extends Vehicle {
    drive () {
        return `${this.make} : This is an inheritance example.`
    }
}

let myCar = new Car("Toyota", "Parado");
// console.log(myCar.start())
// console.log(myCar.drive())

let vehicleOne = new Vehicle("Toyota", "Parado");
// console.log(vehicleOne.make)

// Encapsulation
class BankAccount {
    // By putting # starting of a variable then it will not be accessable by another classes
    #balance = 0;

    deposit (amount) {
        this.#balance += amount
        return this.#balance;
    }

    getBalance () {
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccount();
// account.deposit(400)
// console.log(account.getBalance())


// Abstraction

class CoffeeMachine {
    start () {
        // call DB
        // filter value
        return `Starting the machine...`
    }

    brewCoffee() {
        // complex calculation
        return `Brewing coffee`;
    }

    pressStartButton() {
        let msgOne = this.start()
        let msgTwo = this.brewCoffee()
        return `${msgOne} + ${msgTwo}`
    }
}

let myMachine = new CoffeeMachine()
// console.log(myMachine.start())
// console.log(myMachine.brewCoffee())

// console.log(myMachine.pressStartButton())


// Polymorphism

class Bird {
    fly() {
        return `Flying...`
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguins can't fly`
    }
}

let bird = new Bird()
let penguin = new Penguin()
// console.log(bird.fly())
// console.log(penguin.fly())


// static method
// statics are special methods which can be only called by the class itselt no body can call them.
class Calculator {
    // static can be anything it can be a method, or a variable
    static add(a, b) {
        return a + b;
    }
}

// If you are using static then you can't call it like this.
// let cal = new Calculator();
// console.log(cal.add(2, 3))

// the method that we have created with static can be only called with the class itself

// console.log(Calculator.add(2, 4))


// <<---      Getters and Setters    --->>

class Employee {
    #salary;
    constructor(name, salary) {
        if (salary < 0) {
            throw new Error("Salary cannot be negative");
        }
        this.name = name
        // underscore(_) doesn't have any meaning here
        this.#salary = salary
    }

    get salary() {
        return `Your are not allowed to see salary`;
    }
    
    set salary(value) {
        if (value < 0) {
            console.log("Invalid Salary");
        } else {
            this._salary = value;
        }
    }

}

let emp = new Employee("Asim", -55000)
console.log(emp._salary)d
// emp.salary = -6000