document.addEventListener("DOMContentLoaded", () => {

const expenseForm = document.getElementById("expense-form")
const expenseNameInput = document.getElementById("expense-name")
const expenseAmountInput = document.getElementById("expense-amount")
const expenseList = document.getElementById("expense-list")
const totalAmountDisplay = document.getElementById("total-amount")


let expenses = []
let totalAmount = calculateTotal()

expenseForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const name = expenseNameInput.value.trim()
  const amount = parseFloat(expenseAmountInput.value.trim())
  console.log(name)
  console.log(amount)

  if(name != "" && isNaN(amount) && amount > 0) {
    const newExpense = {
      // for production level in industries we need to use nano-id, and uid these
      // are standards 
      id: Date.now(),
      name: name,
      amount: amount,
    };
    expenses.push(newExpense);
    saveExpensesToLocal();

    // clear input
    expenseNameInput.value = ""
    expenseAmountInput.value = ""
  }

})


function calculateTotal() {}


function saveExpensesToLocal() {
  localStorage.setItem("expenses", JSON.stringify(expenses))
}



})