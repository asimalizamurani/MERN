// clousures are functions that remember their outer scope.
// clousure functions remembers the environment in which it was created.

function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());
