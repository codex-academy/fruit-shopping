var quantity = document.querySelector('.fruitQty');
var fruits = document.querySelectorAll('.fruit');

var extractFruitSelection = function(){
    var selectedFruit = document.querySelector("input[name='fruit']:checked");

    selectedFruit = selectedFruit ? selectedFruit.value : null;

    return {
        fruit : selectedFruit,
        quantity : quantity.value
    }
}

var message = document.querySelector('.message');

var displayMessage = function(msg){
    message.innerHTML = msg;
};

var clearMessage = function(){
    message.innerHTML = '';
    quantity.value = "";
    for (var i = 0; i < fruits.length; i++) {
        var fruitRadio = fruits[i];
        fruitRadio.checked = false;
    }
};
