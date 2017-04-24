/**
 * This assignment requires that you write IMPERATIVE and FUNCTIONAL versions of the
 * same code.
 *
 * For IMPERATIVE, you should avoid passing functions as parameters.
 * For FUNCTIONAL, you should avoid for loops and mutating variables.
 */

//let planets = require('./planets');
//let settlers = require('./settlers');
let reportcard = require('./reportcard');
let items = require('./items');
let animals = require('./animals');

/**
 * Problem #1
 *
 * Write a function that returns the subjects from a student's report card. Use the REPORTCARD
 * dataset as an input.
 */

function subject(card) {
    let subs = [];
    for (let i = 0; i < card.length; i++) {
        subs.push(card[i].subject);
    }
    return subs;
}

console.log(subject(reportcard));

function getSubject(RC) {
    return RC.subject;
}

console.log(reportcard.map(getSubject));


/**
 * Problem #2
 * 
 * Write a function that applies a sales tax of 10% to the prices of all items in the array. The function
 * should return an array of items (not only their prices).
 *
 * Use the ITEMS dataset as an input.
 */

// function applytax(shoplist) {
//     for (let i = 0; i < shoplist.length; i++) {
//         shoplist[i].price = shoplist[i].price * 1.07;
//     }
//     return shoplist
// }

// console.log(applytax(items));

function salesTax(fooditem) {
    fooditem.price = fooditem.price * 1.07;
    return fooditem;
}

console.log(items.map(salesTax));

/**
 * Problem #3
 *
 * Write a function that returns an array of the same size as an input array but filled with zeroes. For 
 * example, the array [5, 9, 'hello'] would return [0, 0, 0].
 */

function makeZeroes(things) {
    let newThings = [];
    for (let i = 0; i < things.length; i++) {
        newThings.push(0);
    }
    return newThings
}

let test = [5, 29, 'Colby', 9, 'hello'];

console.log(makeZeroes(test));

function FZero(falcon) {
    return 0;
}

console.log(test.map(FZero));

/**
 * Problem #4
 *
 * Write a function that returns an abbreviation for the provided phrase. The abbreviation should consist of
 * a capitalized version of the first letter in each word.
 */

let phrase = 'what a beautiful day in the neighborhood';

// function abbrev(sent) {
//     let newsent = sent.split(' ');
//     for (let i = 0; i < newsent.length; i++) {

//     }           
// }

// abbrev(phrase);

function makeAbbrev(word) {
    let newWord = word[0].toUpperCase();
    return newWord;
}

function splitSent(sentence) {
    let splitted = sentence.split(' ');
    return splitted;
}

console.log(splitSent(phrase).map(makeAbbrev).join(' '));

/**
 * Problem #5
 *
 * Write a function that removes all punctuation from a provided sentence (exclamation marks, periods, and 
 * commas). 
 */
let punctdSen = ("My name is Patches O'Hoolahan Jr., thank you very much!");

function removePunct(words) {
    let wordSplit = words.split('');
    let NoPunc = [];
    for (let i = 0; i < wordSplit.length; i++) {
        if (wordSplit[i] !== "," && wordSplit[i] !== '!' && wordSplit[i] !== '.' && wordSplit[i] !== "'") {
            NoPunc.push(wordSplit[i]);
        }
    }
    return NoPunc.join('');
}

console.log(removePunct(punctdSen));

function splitCharacters(wordgroup) {
    let splitted = wordgroup.split('');
    return splitted;
}

function takeOut(arrayitem) {
    if (arrayitem !== ',' && arrayitem !== '!' && arrayitem !== '.' && arrayitem !== "'") {
        return arrayitem;
    }

}
console.log(splitCharacters(punctdSen).map(takeOut).join(''));

/**
 * Problem #6
 *
 * Write a function that accepts an array of numbers and returns an array of boolean values reflecting whether
 * each number is negative (true if yes, false if no).
 */




/**
 * Problem #7
 *
 * Write a function that accepts an array of farm animals and returns the distance of each animal from the barn
 * (specified as a number). Use the ANIMALS array as an input for this problem, and assume the barn is at (0, 0).
 *
 * You will need to use the Pythagorean theorem to solve this!
 * https://en.wikipedia.org/wiki/Pythagorean_theorem#Other_forms_of_the_theorem
 */