    describe('The Fruitshop', function(){

        it('should be able to sell 3 apples for R7.50', function(){
            assert.equal("You bought 3 apples for R7.50", sellFruits('apples', 3));
        });

        it('should be able to sell 2 bananas for R3.50', function(){
            assert.equal("You bought 2 bananas for R3.50", sellFruits('bananas', 2));
        });

        it('should be able to sell 5 pears for R7.50', function(){
            assert.equal("You bought 5 pears for R7.50", sellFruits('pears', 5));
        });

        it('should be able to return a message for invalid options', function(){
            assert.equal("Invalid selection.", sellFruits());
        });

    });
