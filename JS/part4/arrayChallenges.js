/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`,
Access the first element of the array and store it in a variable named `firstTea`;
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"];

let firstTea = teaFlavors[0];
// console.log(firstTea);

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"` and `"New York"`. Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];

let favoriteCity = cities[2];
// console.log(favoriteCity)

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, and `"masala chai"`. Change the second element of the array to `"jasmine tea"`.
*/

let teaTypes = ["herbal tea", "masala chai"];
teaTypes[1] = "jasmine tea";

// console.log(teaTypes)

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`.
Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin"); // first way to push an element to an array

// console.log(citiesVisited)

// citiesVisited[citiesVisited.length] = "Berlin"; // 2nd way to push an element to an array

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`.
Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
let lastOrder = teaOrders.pop();

// console.log(lastOrder);

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`.
Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = ["green tea", "oolong tea", "chai"];

let softCopyTeas = popularTeas;

// console.log(popularTeas)
// console.log(softCopyTeas)

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`.
Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"];
let hardCpoyCities = [...topCities]; // Copying an array using spread operator it will create a hard copy.
// let hardCopyCities = topCities.slice(); // copying an array using slice method it will create a hard copy as well
topCities.pop()
// console.log(hardCopyCities)
// console.log(topCities)

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`.
Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);

// console.log(worldCities);
// let worldCities = [...europeanCities, ...asianCities];

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`.
    Find the length of the array and store it in a variable named `menuLenght`.
*/

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"]

let menuLenght = teaMenu.length;
// console.log(menuLenght);

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`.
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonInList = cityBucketList.includes("London");
// console.log(isLondonInList);