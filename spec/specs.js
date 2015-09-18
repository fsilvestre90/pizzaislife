describe('Topping', function() {
    it("creates a topping", function() {
        var testTopping = new Topping("Pepperoni");
        expect(testTopping.toppingType).to.equal("Pepperoni");
    });
});

describe('Pizza', function() {
    it("creates a pizza object with no toppings", function() {
        var testPizza = new Pizza("LG", "BBQ Chicken",[], 17.50);
        expect(testPizza.toppings).to.eql([]);
        expect(testPizza.pizzaCost).to.equal(17.50);
        expect(testPizza.pizzaSize).to.equal("LG");
        expect(testPizza.pizzaType).to.equal("BBQ Chicken");
    });

    it("creates a pizza object with 1 topping", function() {
        var pepperoni = new Topping("Pepperoni");
        var testPizza = new Pizza("LG", "BBQ Chicken",[pepperoni], 17.50);
        expect(testPizza.toppings).to.eql([pepperoni]);
        expect(testPizza.pizzaCost).to.equal(17.50);
        expect(testPizza.pizzaSize).to.equal("LG");
        expect(testPizza.pizzaType).to.equal("BBQ Chicken");
    });
    it("creates a pizza object with N toppings", function() {
        var pepperoni = new Topping("Pepperoni");
        var poo = new Topping("Poo");
        var artichoke = new Topping("art");
        var testPizza = new Pizza("LG", "BBQ Chicken",[pepperoni, poo, artichoke], 17.50);
        expect(testPizza.toppings).to.eql([pepperoni, poo, artichoke]);
        expect(testPizza.pizzaCost).to.equal(17.50);
        expect(testPizza.pizzaSize).to.equal("LG");
        expect(testPizza.pizzaType).to.equal("BBQ Chicken");
    });
    it("calculates pizza total with 3 toppings", function() {
        var pepperoni = new Topping("Pepperoni");
        var poo = new Topping("Poo");
        var artichoke = new Topping("art");
        var testPizza = new Pizza("LG", "BBQ Chicken",[pepperoni, poo, artichoke]);
        testPizza.calculatePizzaCost();
        expect(testPizza.pizzaCost).to.equal(7);
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

    it("tests total cart price with total pizza price functions", function() {
        var top1 = new Topping("test");
        var top2 = new Topping("test");
        var bbqChicken = new Pizza("LG", "BBQ Chicken", [top1, top2]); // should be 6 dollars
        var plain = new Pizza("MD", "Plain", [top1]); //should be 4
        var testOrder = new Order([bbqChicken, plain]);
        bbqChicken.calculatePizzaCost();
        plain.calculatePizzaCost();
        testOrder.calculateTotal();
        expect(testOrder.orderTotal).to.equal(10);
    });
});
