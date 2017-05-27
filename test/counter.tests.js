    describe('the counter', function(){

        it('should be able to increment when a new user is greeted', function(){

            var myCounter = TheCounter();
            myCounter.countGreet('Lucky');
            assert.equal(1, myCounter.greetedUserCount());

            myCounter.countGreet('Sivu');
            assert.equal(2, myCounter.greetedUserCount());

            //greetCounter = 9;

            myCounter.countGreet('Nolonwabo');
            assert.equal(3, myCounter.greetedUserCount());

            var myCounter2 = TheCounter();
            myCounter2.countGreet('Kaleb');
            assert.equal(1, myCounter2.greetedUserCount());


        });

        it('should be not increment when an existing user is greeted', function(){

            var myCounter = TheCounter();
            myCounter.countGreet('Lucky');
            assert.equal(1, myCounter.greetedUserCount());

            myCounter.countGreet('Lucky');
            assert.equal(1, myCounter.greetedUserCount());

            myCounter.countGreet('Joe');
            assert.equal(2, myCounter.greetedUserCount());

            //assert.equal(1,2)
        });

        // it('should be able to tell me how many unique users was greeted', function(){
        //     assert.equal(1,2);
        // });

        // it('should be able to tell me how many a given user was greeted', function(){
        //     assert.equal(1,2);
        // });

        it('should be able initialize the counter with initial values', function(){

            var firstName = document.querySelector(".firstName");
            var languages = document.querySelectorAll(".language");

            firstName.value = "André";
            languages[0].checked = true;

            var elem = document.querySelector("input[name='language']:checked");

            assert.equal("Afrikaans", elem.value)


            //assert.equal(1,2);

        });

        it('should be able to store values to LocalStorage', function(){
            //assert.equal(1,2);
        });
    });
