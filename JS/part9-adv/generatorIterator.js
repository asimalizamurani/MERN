/**
 * A generator function that yields a sequence of numbers.
 * When called, it returns an [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) that can be used to 
 * retrieve the numbers one at a time.
 * 
 * @returns {Generator<number>} An iterator that produces numbers 1 through 4.
 */
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let gen = numberGenerator(); // Create an instance of the number generator
let genTwo = numberGenerator(); // Create another instance of the number generator

// Using the iterator to retrieve values from the generator
// Iterators return an object with next() method which produces a sequence of values.
console.log(gen.next().value); // Outputs: 1
console.log(gen.next().value); // Outputs: 2
console.log(gen.next().value); // Outputs: 3
console.log(gen.next().value); // Outputs: 4

console.log(genTwo.next().value); // Outputs: 1 (new instance starts from the beginning)
console.log(genTwo.next().value); // Outputs: 2
