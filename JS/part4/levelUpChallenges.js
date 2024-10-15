/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`.
   Store all teas before `"chai"` in a new array named selectedTeas.
*/

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
    newTeas =teas[i]

    if (newTeas === "chai") {
        break;
    }

    selectedTeas.push(newTeas);
    
}

// console.log(selectedTeas)

/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`.
    Store the other cities in a new array named `visitedCities`.
*/

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let j = 0; j < cities.length; j++) {
    city = cities[j]

    if (city === "Paris" || city === "paris") {
        continue
    }
    visitedCities.push(city)
}
// console.log(visitedCities)


/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found.
   Store the numbers before `4` in an array named `smallNumbers`.
*/

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const number of numbers) {
    
    if (number === 4) {
        break;
    }
    smallNumbers.push(number)
}

// console.log(smallNumbers)

/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbat tea".
    Store the other teas in an array named `preferredTeas`.
*/

let teaList = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of teaList) {
    
    if (tea === "herbal tea") {
        continue;
    }
    preferredTeas.push(tea)
}

// console.log(preferredTeas)

/* 
5. Use a `for-in` loop to loop through an object containing city populations.
    Stop the loop when the population of `"Berlin"` is found and store all previous cities populations in a new object named `cityPopulations`.

    let citiesPopulation = {
    "London": 890000,
    "New York": 840000,
    "Paris": 220000,
    "Berlin": 350000
    }
*/

let citiesPopulations  = {
    London: 890000,
    "New York": 840000,
    Paris: 220000,
    Berlin: 350000
}

let cityNewPopulations = {};

for (const city in citiesPopulations) {
    
    if (city === "Berlin") {
        break;
    }

// console.log(citiesPopulations[city]) // prints the values of object
cityNewPopulations[city] = citiesPopulations[city] // setting the keys and values

}
// console.log(cityNewPopulations)

// object methods to learn
// console.log(Object.keys(citiesPopulations)) // Prints the obj keys
// console.log(Object.values(citiesPopulations)) // Prints the obj values


/* 
6. Use a `for-in` loop to loop through an object containin city populations.
    Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

    let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
    }
*/

let worldCities = {
    Sydney: 5000000,
    Tokyo: 9000000,
    Berlin: 3500000,
    Paris: 2200000
}

let largeCities = {};

for (const city in worldCities) {
    
    if (worldCities[city] < 3000000) {
        continue;
    }

    largeCities[city] = worldCities[city];
}

// console.log(largeCities)

/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`.
    Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaCollection.forEach(function(tea) {
    if (tea === "chai") {
        return;
    }
    availableTeas.push(tea);
})

// console.log(availableTeas)

/* 
8. Write a `forEach` loop that iterates throught the array `["Berlin", "Tokyo", "Sydney", "Paris"]`.
    Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/

let citiesList = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

citiesList.forEach(function(city) {
    if (city === "Sydney") {
       return;
    }
    traveledCities.push(city);
})

// console.log(traveledCities)

/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`.
    Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/

let arrNumbers = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < arrNumbers.length; i++) {
    
    if (arrNumbers[i] === 7) {
        continue;
    }

    doubledNumbers.push(arrNumbers[i] * 2)
}

// console.log(doubledNumbers)

/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]`
    and stop when the length of the current tea name is greater than 10.
    Store the teas iterated over in an array named `shortTeas`.
*/

let allTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of allTeas) {

    if (tea.length > 10) {
        break;
    }
    shortTeas.push(tea);
}
// console.log(shortTeas);

let sum = 0;
for (let i = 1; i <1; i++) {
    sum += i;
}
console.log(sum)