document.addEventListener("DOMContentLoaded", () => {
  // Create some products data
  const products = [
    {id: 1, name: "Product 1", price: 29.99},
    {id: 2, name: "Product 2", price: 19.99},
    {id: 3, name: "Product 3", price: 39.99},
  ];


  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const productList = document.getElementById("product-list")
  const cartItems = document.getElementById("cart-items")
  const emptyCart = document.getElementById("empty-cart")
  const cartTotal = document.getElementById("cart-total")
  const totalPriceDisplay = document.getElementById("total-price")
  const checkOutBtn = document.getElementById("checkout-btn")
  const deleteBtn = document.getElementById("remove-btn")

  // toFixed basically removes elements which are coming about the decimal points
    // if price is 33.999 -> toFixed(2) convert it to 33.99
  products.forEach(product => {
    const productDiv = document.createElement("div")
    productDiv.classList.add("product")
    productDiv.innerHTML = `
    <span>${product.name} - ${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to Cart</button>
    `;
    productList.appendChild(productDiv)
  });

  productList.addEventListener("click", function(e) {
    // console.log(e.target.tagName)
    
    if(e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute('data-id'))
      const product = products.find(p => p.id === productId)
      console.log(product)
      addToCart(product)
    }
  });

  function addToCart(product) {
    cart.push(product)
    saveProduct()
    rendereCart()
  } 

  function rendereCart() {
    cartItems.innerHTML = "";
    let totalPrice = 0;

    if(cart.length > 0) {
      emptyCart.classList.add("hidden")
      cartTotal.classList.remove("hidden")
      cart.forEach((item, index) => {
        totalPrice += item.price
        
        const cartItem = document.createElement("div")
        cartItem.innerHTML = `
          ${item.name} - ${item.price.toFixed(2)}
        `;
        cartItems.appendChild(cartItem)
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
      })
    } else {
      emptyCart.classList.remove("hidden")
      totalPriceDisplay.textContent = `$0.00`;
    }
  }

    checkOutBtn.addEventListener("click", () => {
      cart.length = 0
      alert("Thank you for your purchase!")
      rendereCart()
      saveProduct()
    })

    deleteBtn.addEventListener("click", () => {
      decrementPrice()
      removeFromCart()
    })
  
    function removeFromCart() {
      cart.pop()
      saveProduct()
    }   

    // Decrement the price when a product is remove from cart page
    function decrementPrice() {
      let totalPrice = 0;
  
      if(cart.length > 0) {
        cart.forEach((item) => {
          totalPrice -= item.price

          // const cartItem = document.createElement("div")
        cartItems.innerHTML = `
          ${item.name} - ${item.price.toFixed(2)}
        `;
        
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
          
        })
        console.log(totalPrice)
      }
    }
   
    // Storing the task data in local storage.
function saveProduct() {
  localStorage.setItem("cart", JSON.stringify(cart))
}

rendereCart() //

})