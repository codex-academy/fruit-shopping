var sellFruit = function(fruit, quantity){
    // apples at 2.50 each
    //bananas at 1.75 each

    if (!fruit || !quantity){
        return "Invalid parameters"
    }

    const fruitPriceMap = {
        apples : "2.50",
        bananas : "1.75",
        pears : "1.50"
    }

    //You bought 3 bananas for R5.25

    var totalPrice = fruitPriceMap[fruit] * quantity;

    return "You bought " + quantity + " " + fruit + " for R" + totalPrice.toFixed(2);
}
