// name export

function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

// Even though if you have one function to export still you need to write exports
module.exports = {
    add,
    subtract,
    multiply
}
