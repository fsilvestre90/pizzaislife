// Topping
function Topping(toppingType) {
    this.toppingType = toppingType;
}

// Pizza
function Pizza(pizzaSize, pizzaType, toppings, pizzaCost) {
    "use strict";
    this.pizzaSize = pizzaSize;
    this.pizzaType = pizzaType;
    this.toppings = toppings;
    this.pizzaCost = pizzaCost;
}

Pizza.prototype.calculatePizzaCost = function() {
    var cost = 0;

    //add base pizza price based on size (could make this into array/for loop, but I'm lazy)
    if(this.pizzaSize === "SM") {
        cost += 2;
    }
    else if(this.pizzaSize === "MD") {
        cost += 3;
    }
    else if(this.pizzaSize === "LG") {
        cost += 4;
    }
    //calclulate cost for each topping (once again this could be dynamic, but I'm lazy)
    for(var topping in this.toppings) {
        cost += 1; //yes, these toppings are hella expensive. non-GMO, organic, and spoken to daily
    }
    //this pizza shop is adventurous and wants to make profit with toppings
    this.pizzaCost = cost;
};

// Order
function Order(cartItems, orderTotal) {
    "use strict";
    this.cartItems = cartItems;
    this.orderTotal = orderTotal;
}

Order.prototype.calculateTotal = function() {
    var pizzaTotal = 0;
    for(var pizzaIndex in this.cartItems) {
        pizzaTotal += this.cartItems[pizzaIndex].pizzaCost;
    }
    this.orderTotal = pizzaTotal;
};
