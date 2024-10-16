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
});

// example 6
let clickMeButton = document.getElementById('clickMeButton')

clickMeButton.addEventListener("dblclick", function() {
    alert("Button clicked!")
})

// example 7: Event Delegation
let teaList = document.getElementById('teaList')

teaList.addEventListener("click", function(e) {
    if (e.target && e.target.matches('.teaItem')) {
        alert(`You selected ${e.target.textContent}`)
        e.target.classList.add("highlight")
    }
    setTimeout(() => {
        e.target.classList.remove("highlight")
    }, 1000);
})

// example 8: Form Handling

let feedbackForm = document.getElementById("feedbackForm")

feedbackForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let feedbackInput = document.querySelector("input");
    let feedbackValue = feedbackInput.value;
    let feedbackDisplay = document.getElementById("feedbackDisplay");
    feedbackDisplay.textContent = feedbackValue

    // feedback Message styling
    feedbackDisplay.classList.add("feedbackMessage")

    feedbackInput.value = ""
})

// example 9: Dom Content Loaded
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("domStatus").textContent = "Dom fully loaded"
})

// example 10: CSS Classes Manipulation

let text = document.getElementById("descriptionText")
let toggleBtn = document.getElementById("toggleHighlight")

toggleBtn.addEventListener("click", function() {
    text.classList.toggle("highlight")
})