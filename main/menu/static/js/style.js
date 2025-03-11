// Sample menu data
const menuItems = [
    { name: "Burger", price: 5.99 },
    { name: "Pizza", price: 8.99 },
    { name: "Pasta", price: 7.99 },
    { name: "Salad", price: 4.99 },
    { name: "Soda", price: 1.99 }
];

// Initialize the menu
function initializeMenu() {
    const menuList = document.getElementById('menu-list');
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'list-group-item';
        menuItem.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <button class="btn btn-primary btn-sm" onclick="addToOrder('${item.name}', ${item.price})">Add</button>
        `;
        menuList.appendChild(menuItem);
    });
}

// Add item to order
function addToOrder(name, price) {
    const orderSummary = document.getElementById('order-summary');
    const orderItem = document.createElement('li');
    orderItem.className = 'list-group-item';
    orderItem.innerHTML = `
        ${name} - $${price.toFixed(2)}
        <button class="btn btn-danger btn-sm" onclick="removeFromOrder(this, ${price})">Remove</button>
    `;
    orderSummary.appendChild(orderItem);
    updateTotal(price);
}

// Remove item from order
function removeFromOrder(button, price) {
    const orderItem = button.parentElement;
    orderItem.remove();
    updateTotal(-price);
}

// Update total price
function updateTotal(price) {
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = parseFloat(totalPriceElement.textContent);
    totalPrice += price;
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Place order
function placeOrder() {
    const totalPrice = parseFloat(document.getElementById('total-price').textContent);
    if (totalPrice > 0) {
        alert(`Order placed! Total: $${totalPrice.toFixed(2)}`);
        document.getElementById('order-summary').innerHTML = '';
        document.getElementById('total-price').textContent = '0.00';
    } else {
        alert('Your order is empty!');
    }
}

// Initialize the menu when the page loads
window.onload = initializeMenu;