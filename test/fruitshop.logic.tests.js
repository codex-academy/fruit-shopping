    describe('The Fruit shop', function(){

        function extractUserScreenSelection(){
            return {
                language : document.querySelector("input[name='language']:checked"),
                firstName : document.querySelector(".firstName")
            }
        }

        it('should be able to calculate the price for the fruit selected', function(){
            assert.equal(1,2);
        });

    });
