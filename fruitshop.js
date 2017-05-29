var buyButton = document.querySelector('.buyButton');
var clearButton = document.querySelector('.clearButton');

buyButton.addEventListener('click', function(){

    var fruitData = extractFruitSelection();
    var message = sellFruit(fruitData.fruit, fruitData.quantity);
    displayMessage(message);

});

clearButton.addEventListener('click', function(){
    clearMessage();
});
