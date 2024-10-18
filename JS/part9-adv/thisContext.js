let person = {
    name: "Asim",
    greet () {
        console.log(`Hello I'm ${this.name}`)
    }
}

person.greet()
// when we store person.greet in another variable then in the context will be lost such as in this case greetFunction can't print the value of name.
let greetFunction = person.greet
greetFunction()

const boundGreet = person.greet.bind({name: "Samir"})
boundGreet()

// bind, call and apply


// Arrow function does not create its own "this" binding, so it uses the "this" value from its surrounding context.

const arrowGreet = () => {
    console.log(`Hello I'm ${this.name}`)
}

arrowGreet() // it will print Hello I'm undefined because arrow function does not have its own "this" binding