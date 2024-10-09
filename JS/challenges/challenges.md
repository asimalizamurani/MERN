        
                       CHALLENGES TO PRACTICE

                       6: LOOPS CHALLENGES
                    [WHILE, DO WHILE AND FOR]
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.


2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.


3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`.
    Store each tea type in an array named `teaCollection`.


4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.


5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the result in new array named `multipliedNumbers`.


6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.

                     10: CHALLENGES ON LOOPS
                [FOR, FOR-IN, FOR-OF AND FOREACH]   

CHALLENGES ON LOOPS

1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`.
   Store all teas before `"chai"` in a new array named selectedTeas.

2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`.
    Store the other cities in a new array named `visitedCities`.

3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found.
   Store the numbers before `4` in an array named `smallNumbers`.

4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbat tea".
    Store the other teas in an array named `preferredTeas`.

5. Use a `for-in` loop to loop through an object containing city populations.
    Stop the loop when the population of `"Berlin"` is found and store all previous cities populations in a new object named `cityPopulations`.

6. Use a `for-in` loop to loop through an object containin city populations.
    Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

    let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
    }

7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`.
    Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.

8. Write a `forEach` loop that iterates throught the array `["Berlin", "Tokyo", "Sydney", "Paris"]`.
    Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.

9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`.
    Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.

10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]`
    and stop when the length of the current tea name is greater than 10.
    Store the teas iterated over in an array named `shortTeas`.


                      CHALLENGES ON FUNCTIONS

1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`,
Store the result in a variable named `takeOrder`.

2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`.
Call `confirmOrder` from within `orderTea` and return the result.

3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`.
Store the result in a variable named `totalCost`.

4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`.
Return the result of calling `makeTea`.

5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`.
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.