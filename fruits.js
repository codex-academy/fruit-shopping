var fruits = document.querySelectorAll('.fruit');
var fruitQty = document.querySelector('.fruitQty');
var message = document.querySelector('.message');

var buyButton = document.querySelector('.buyButton');
var clearButton = document.querySelector('.clearButton');

var extractFruitShopData = function(){

    var selectedFruitElem =  document.querySelector(".fruits input[type='radio']:checked");

    // var fruitList = Array.from(fruits);
    // var selectedFruitElem = fruitList.find(function(fruitRadio){
    //     return fruitRadio.checked;
    // });

    var selectedFruit = '';
    if (selectedFruitElem){
        selectedFruit = selectedFruitElem.value;
    }
    var quantity = 0;
    if (fruitQty && Number(fruitQty.value)){
        quantity = Number(fruitQty.value);
    }

    return {
        fruitName : selectedFruit,
        quantity
    }
}

var showMessage = function(msg){
    message.innerHTML = msg;
}

var clearMessage = function(){
    message.innerHTML = "";
    fruitQty.value = '';
    for (var i = 0; i < fruits.length; i++) {
        var fruitRadio = fruits[i];
        fruitRadio.checked = false;
    }
}

var sellFruits = function(fruit, quantity){

    const fruitPrices = {
        'apples' : 2.50,
        'bananas' : 1.75,
        'pears' : 1.50
    };

    let fruitPrice = fruitPrices[fruit];
    if (!quantity || !fruitPrice){
        return "Invalid selection."
    }

    let totalPrice = fruitPrice * quantity;
    totalPrice = totalPrice.toFixed(2);
    return `You bought ${quantity} ${fruit} for R${totalPrice}`;
}

buyButton.addEventListener('click', function(){
    var screenData = extractFruitShopData();
    var message = sellFruits(screenData.fruitName, screenData.quantity);
    showMessage(message);
});

clearButton.addEventListener('click', function(){
    clearMessage(message);
});
