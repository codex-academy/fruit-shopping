    describe('The Fruit shop DOM code', function(){

        function extractUserScreenSelection(){
            return {
                language : document.querySelector("input[name='language']:checked"),
                firstName : document.querySelector(".firstName")
            }
        }

        it('should be able to get the fruit and quantity selected', function(){

            assert.equal(1,2);

            // Assemble set the screen state up
            // var firstName = document.querySelector(".firstName");
            // var languages = document.querySelectorAll(".language");
            //
            // firstName.value = "André";
            // languages[0].checked = true;
            //
            // //Act
            // var data = extractUserScreenSelection();
            //
            // //Assert
            // assert.equal("André", data.firstName.value);
            // assert.equal("Afrikaans", data.language.value);

        });

        it('should be able to display the fruit price message', function(){

            assert.equal(1,2);

            // Assemble set the screen state up
            // var firstName = document.querySelector(".firstName");
            // var languages = document.querySelectorAll(".language");
            //
            // firstName.value = "André";
            // languages[0].checked = true;
            //
            // //Act
            // var data = extractUserScreenSelection();
            //
            // //Assert
            // assert.equal("André", data.firstName.value);
            // assert.equal("Afrikaans", data.language.value);

        });

    });
