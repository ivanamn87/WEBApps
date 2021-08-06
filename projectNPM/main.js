let funnyWords = require('funny-words');
let randomWords = require('random-words');
let oneLinerJoke = require('one-liner-joke');

console.log(funnyWords("Don't worry, be happy!"));
console.log(funnyWords("Ne brini, budi srecan!"));

console.log(randomWords(2));

var joke1 = oneLinerJoke.getRandomJoke();
var joke2 = oneLinerJoke.getRandomJoke();
console.log(joke1.body)
console.log(joke2.body)

let makeAJoke = () => {
    var joke = oneLinerJoke.getRandomJoke();
    return joke.body
}