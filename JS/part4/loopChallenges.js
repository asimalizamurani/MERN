/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/
// Solution
/* 
let sum = 0;
let i = 1;

while (i <= 5) {
    sum += i;
    // sum = sum + i; // sum += i; these both line does the same thing.
    i++;
}
console.log(sum); */

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

/* let countdown = [];
let j = 5;
while (j >= 1) {
    countdown.push(j);
    j--;
}
console.log(countdown) */

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`.
    Store each tea type in an array named `teaCollection`.
*/

// 3:  Solution
/* let teaCollection = [];
let tea;

do {
    tea = prompt(`Enter your favorite tea ( type "stop" to finish)`);
    
    if (tea !== "stop") {
        teaCollection.push(tea);
    }

} while (tea !== "stop");
 */

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/

/* let total = 0;
let m = 1;

do {
    total += m;
    m++;
} while(m <= 3)

    console.log(m) */


    /* 
    5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the result in new array named `multipliedNumbers`.
    */


    let multipliedNumbers = [];
    let numbers = [2, 4, 6];

    for (let l = 0; l < numbers.length; l++) {
         takeNumber = numbers[l] * 2
        multipliedNumbers.push(takeNumber)

        // multipliedNumbers.push(numbers[l] * 2); // second way to the same work.
        
    }
    // console.log(multipliedNumbers)


    /* 
    6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
    */

    let cities = ["Paris", "New York", "Tokyo", "London"];
    let cityList = [];

    for (let c = 0; c < cities.length; c++) {
        cityList.push(cities[c]);
    }

    // console.log(cityList);
