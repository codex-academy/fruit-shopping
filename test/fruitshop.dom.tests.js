    describe('The Fruit shop DOM code', function(){

        it('should be able to get the fruit and quantity selected', function(){

            //Assemble
            var fruits = document.querySelectorAll('.fruit');
            var fruitQty = document.querySelector('.fruitQty');

            fruits[1].checked = true;
            fruitQty.value = 7;

            //Act
            var screenData = extractFruitShopData();

            //Assert
            assert.equal("pears", screenData.fruitName);
            assert.equal(7, screenData.quantity);

        });

        it('should be able to display the fruit price message', function(){

            //Assemble
            var message = document.querySelector('.message');
            //Act
            showMessage('Fruits are tops!');

            //Assert
            assert.equal('Fruits are tops!', message.innerHTML)

        });

        it('should be able to clear the fruit price message', function(){

            //Assemble
            var message = document.querySelector('.message');
            //Act
            clearMessage();

            //Assert
            assert.equal('', message.innerHTML)

        });

    });
