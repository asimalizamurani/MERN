// example 1

let para = document.getElementById("myParagraph")
let btn = document.getElementById("changeTextButton")

btn.addEventListener("click", function() {
    para.textContent = "You are hacked bro"
});

// example 2
let highlightButton = document.getElementById("highlightButton");
let cities = document.querySelector("#cities");

// console.log(taskTwo.childNodes[3])
highlightButton.addEventListener("click", function() {
    // taskTwo.childNodes[3].classList.add("highlight")
    cities.firstElementChild.classList.add("highlight")
})

// example 3
let changeOrderBtn = document.getElementById("changeOrder")

changeOrderBtn.addEventListener("click", function() {
    let coffeeType = document.getElementById("coffeeType")
    coffeeType.textContent = "Espresso"
    coffeeType.style.background = "lightseagreen"
    coffeeType.style.padding = "5px"
})

// example 4
let addNewItemBtn = document.getElementById("addNewItem")

addNewItemBtn.addEventListener("click", function() {
    let element = document.createElement('li')
    element.textContent = "water";

    let shoppingList = document.getElementById("shoppingList")
    shoppingList.appendChild(element)
})

// example 5
let removeTask = document.getElementById("removeLastTask")

removeTask.addEventListener("click", function() {
    let taskList = document.getElementById("taskList")
    // you can use remove method in both way
    // taskList.removeChild(taskList.lastElementChild)
    taskList.lastElementChild.remove()
})