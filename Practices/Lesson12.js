// // ARRAY METHODS
// const _ = require('lodash');


// const people = [
//     {name: 'Emmanuel', age: 21},
//     {name: 'Tyler', age: 14},
//     {name: 'James', age: 20},
//     {name: 'Joshua', age: 17},
//     {name: 'Micheal', age: 18},
// ] 


// const output = _.groupBy(people, 'name[0]');
// console.log(output);

// const removeLastObject = people.pop();
// console.log(removeLastObject);
// // console.log(people);

// const removeFirstObject = people.shift();
// console.log(removeFirstObject);
// // console.log(people);

// const addToTheFront = people.unshift(4);
// console.log(addToTheFront);
// console.log(people);

// const addInPosition = people.with(2, 6);
// console.log(addInPosition);

// const add = people.at(-2);
// console.log(add);
// // console.log(people);

// // fill(1), fill(1, 1), fill(1,1,3)
// const toFill = people.fill(1, 1, 3);
// console.log(toFill);

// const toReverse = people.reverse (1, 2);
// console.log(toReverse);


// const toTakeOutARange = people.splice (1, 2);
// console.log(toTakeOutARange);

// const numbers = [1, 2, 78, 9, 10, 15, [[3]], [90]];


// // flat(1), flat(2)
// const result = numbers.flat(Number.POSITIVE_INFINITY);

// console.log(result);

// const mapResult = numbers.flatMap((number)=> {
//     return number;
// })

// // console.log(mapResult);


// // Starts from the back
// const findLast = numbers.findLast(n => n < 10)

// console.log(findLast);

// // Starts from the back
// const findFirst = numbers.find(n => n < 10)

// console.log(findFirst);

function abc(a, b) {
    'use strict'
    a = 100
    b = 200
    return arguments[0] + arguments[1]
    // console.log(a+b);
    
}
console.log(abc(300, 400));

const arr = [1,2,3,4,5,6,7,8,9,10];

const newArr = arr.map(num => num > 3);

console.log(newArr);









