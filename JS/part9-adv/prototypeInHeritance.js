function Person(name) {
    this.name = name
}

Person.prototype.greet = function() {
    console.log(`Hello bro this is ${this.name}`)
}

let asim = new Person("Asim");
asim.greet()