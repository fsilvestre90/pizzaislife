// Topping
function Topping(toppingType) {
    this.toppingType = toppingType;
}

// Pizza
function Pizza(pizzaSize, pizzaType, toppings, quantity, pizzaCost) {
    "use strict";
    this.pizzaSize = pizzaSize;
    this.pizzaType = pizzaType;
    this.toppings = toppings;
    this.quantity = quantity;
    this.pizzaCost = pizzaCost;
}

Pizza.prototype.calculatePizzaCost = function() {
    var cost = 0;

    //add base pizza price based on size (could make this into array/for loop, but I'm lazy)
    switch (this.pizzaSize) {
        case "small":
        cost += 2;
        break;
        case "medium":
        cost += 3;
        break;
        case "large":
        cost += 4;
        break;
    }
    //calclulate cost for each topping (once again this could be dynamic, but I'm lazy)
    for (var topping in this.toppings) {
        cost += 1; //yes, these toppings are hella expensive. non-GMO, organic, and spoken to daily
    }
    //if there are more than 1 being ordered, multiply the cost with quantity
    if(this.quantity > 1) {
        cost = cost * this.quantity;
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
    for (var pizzaIndex in this.cartItems) {
        pizzaTotal += this.cartItems[pizzaIndex].pizzaCost;
    }
    this.orderTotal = pizzaTotal;
};

//jQuery
$(document).ready(function() {
    $('.pizzaSize').on('change', function() {
        $('input.pizzaSize').not(this).prop('checked', false);
    });

    $('.pizzaType').on('change', function() {
        $('input.pizzaType').not(this).prop('checked', false);
    });

    $("form#new-order").submit(function(event) {
        event.preventDefault();
        //get all inputs
        var toppings = [];
        $(".toppings:checked").each(function() {
            toppings.push(new Topping(this.value));
        });
        var pizzaSize = $(".pizzaSize:checked").val();
        var pizzaType = $(".pizzaType:checked").val();
        var quantity = document.getElementById("quantity").value;

        //create new pizza and calculate the totalcost for it
        var newPizza = new Pizza(pizzaSize, pizzaType, toppings, quantity);
        newPizza.calculatePizzaCost();
        //now make the order and calculate total cost
        var newOrder = new Order([newPizza]);
        newOrder.calculateTotal();

        $("#show-order").show();
        $(".size").text(newPizza.pizzaSize);
        $(".style").text(newPizza.pizzaType);
        $(".quantity").text(newPizza.quantity);
        $(".totalCost").text(newOrder.orderTotal);
    });
});
