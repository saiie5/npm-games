var giveMeAJoke = require('give-me-a-joke');
var category = "funny";
giveMeAJoke.getRandomJokeOfTheDay (category, function(joke) {
     console.log(joke);
});