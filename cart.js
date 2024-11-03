// Function to add a product to the cart
function addToCart(productId, productName, price) {
  // Retrieve cart from localStorage, or initialize as an empty array if it doesn't exist
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product is already in the cart
  const index = cart.findIndex(item => item.productId === productId);

  if (index !== -1) {
    // If the product exists in the cart, increase its quantity by 1
    cart[index].quantity += 1;
  } else {
    // If the product is not in the cart, add it with a quantity of 1
    cart.push({ productId, productName, price, quantity: 1 });
  }

  // Update the cart in localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Display a confirmation message
  alert(`${productName} added to cart!`);
}

// Function to display all items in the cart
function displayCartItems() {
  // Retrieve the cart from localStorage, or initialize as an empty array if it doesn't exist
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cart-items');

  // Clear the current content in the cart display area
  cartItemsContainer.innerHTML = '';

  if (cart.length === 0) {
    // If the cart is empty, display a message indicating this
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  // Loop through each item in the cart and create HTML to display it
  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.innerHTML = `
      <p>${item.productName} - $${item.price} x ${item.quantity}</p>
      <button onclick="removeFromCart('${item.productId}')">Remove</button>
      <button_qty onclick="increaseQuantity('${item.productId}')">+</button_qty>
      <button_qty onclick="decreaseQuantity('${item.productId}')">-</button_qty>
    `;
    cartItemsContainer.appendChild(itemElement);
  });
}

// Function to remove a specific product from the cart
function removeFromCart(productId) {
  // Retrieve the cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Filter out the product with the specified productId
  cart = cart.filter(item => item.productId !== productId);

  // Update the cart in localStorage after removal
  localStorage.setItem('cart', JSON.stringify(cart));

  // Refresh the displayed cart items
  displayCartItems();
}

function decreaseQuantity(productId) {
  // Retrieve cart from localStorage, or initialize as an empty array if it doesn't exist
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product is already in the cart
  const index = cart.findIndex(item => item.productId === productId);
  
  cart[index].quantity = cart[index].quantity - 1;

  if(cart[index].quantity <= 0){
     removeFromCart(productId);
  } else {
     // Update the cart in localStorage
     localStorage.setItem('cart', JSON.stringify(cart));

     // Refresh the displayed cart items
     displayCartItems();
  }
}

function increaseQuantity(productId) {
  // Retrieve cart from localStorage, or initialize as an empty array if it doesn't exist
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product is already in the cart
  const index = cart.findIndex(item => item.productId === productId);
  
  cart[index].quantity = cart[index].quantity + 1;

  // Update the cart in localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Refresh the displayed cart items
  displayCartItems();
}


// Function to handle checkout (dummy function for this example)
function checkout() {
  // Display a checkout confirmation message
  alert('Proceeding to checkout...');

  // Clear the cart in localStorage after checkout
  localStorage.removeItem('cart');

  // Refresh the displayed cart items to show an empty cart
  displayCartItems();
}
