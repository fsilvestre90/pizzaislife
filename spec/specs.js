describe('Pizza', function() {
    it("creates a pizza object with no toppings", function() {
        var testPizza = new Pizza("LG", "BBQ Chicken",[], 17.50);
        expect(testPizza).to.deep.equal({
            pizzaSize: "LG",
            pizzaType: "BBQ Chicken",
            toppings: [],
            pizzaCost: 17.50,
        });
    });
    it("creates a pizza object with 1 topping", function() {
        var pepperoni = new Topping("Pepperoni", .50);
        var testPizza = new Pizza("LG", "BBQ Chicken",[pepperoni], 17.50);
        expect(testPizza).to.deep.equal({
            pizzaSize: "LG",
            pizzaType: "BBQ Chicken",
            toppings: [pepperoni],
            pizzaCost: 17.50,
        });
    });
});


describe('Order', function() {
    it("creates an order", function() {
        var testPizza = new Pizza("LG", "BBQ Chicken", [], 17.50);
        var testOrder = new Order([testPizza],17.50);
        expect(testOrder.cartItems).to.eql([testPizza]);
        expect(testOrder.orderTotal).to.equal(17.50);
    });

    it("tests total price of pizzas in cart", function() {
        var bbqChicken = new Pizza("LG", "BBQ Chicken", [], 17.50);
        var plain = new Pizza("MD", "Plain", [], 11.50);
        var testOrder = new Order([bbqChicken, plain]);
        testOrder.calculateTotal();
        expect(testOrder.orderTotal).to.equal(29);
    });
});
