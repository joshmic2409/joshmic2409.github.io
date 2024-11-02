let basket = [];
let total = 0;

function addToBasket(name, price) {
    basket.push({ name, price });
    total += price;
    updateBasket();
}

function updateBasket() {
    const basketItems = document.getElementById('basket-items');
    const totalDisplay = document.getElementById('total');
    
    basketItems.innerHTML = ''; // Clear current basket display
    basket.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - £${item.price.toFixed(2)}`;
        basketItems.appendChild(li);
    });
    
    totalDisplay.textContent = total.toFixed(2); // Update total
}
