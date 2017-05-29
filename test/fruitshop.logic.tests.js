    describe('The Fruitshop', function(){

        it('should be able to sell 3 apples for R7.50', function(){
            assert.equal("You bought 3 apples for R7.50", sellFruit('apples', 3));
        });

        it('should be able to sell 2 bananas for R3.50', function(){
            assert.equal("You bought 2 bananas for R3.50", sellFruit('bananas', 2));
        });

        it('should be able to sell 5 pears for R7.50', function(){
            assert.equal("You bought 5 pears for R7.50", sellFruit('pears', 5));
        });

        it('should give a message for invalid parameters', function(){
            assert.equal("Invalid parameters", sellFruit());
        });

    });
