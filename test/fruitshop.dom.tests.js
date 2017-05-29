    describe('The Fruitshop DOM code', function(){

        it('should be able to get the fruit and quantity selected', function(){

            //Assemble

            var quantity = document.querySelector('.fruitQty');
            var selectedFruit = document.querySelectorAll('.fruit');

            quantity.value = 7;
            selectedFruit[1].checked = true;

            //Act
            var selectedFruitData = extractFruitSelection()

            //Assert
            assert.equal(7, selectedFruitData.quantity);
            assert.equal("pears", selectedFruitData.fruit);

        });

        it('should not give an error if no radio is selected', function(){

            //Assemble
            clearMessage();

            var quantity = document.querySelector('.fruitQty');
            var selectedFruit = document.querySelectorAll('.fruit');

            quantity.value = 7;
            //selectedFruit[1].checked = true;

            //Act
            var selectedFruitData = extractFruitSelection()

            //Assert
            assert.equal(7, selectedFruitData.quantity);
            assert.equal(null, selectedFruitData.fruit);

        });

        it('should be able to display the fruit price message', function(){

            //Assemble

            var message = document.querySelector('.message');

            //Act
            displayMessage('Fruits are cool!');

            //Assert
            assert.equal('Fruits are cool!', message.innerHTML);
        });

        it('should be able to clear the screen', function(){

            //Assemble

            var message = document.querySelector('.message');
            var quantity = document.querySelector('.fruitQty');

            //Act
            clearMessage('');

            var selectedRadio = document.querySelector("input[name='fruit']:checked")
            //Assert
            assert.equal('', quantity.value);
            assert.equal('', message.innerHTML);
            assert.equal(null, selectedRadio);

        });

    });
