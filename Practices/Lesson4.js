// Arrow Functions

function sum(a, b) {
    return a + b;
}
// To arrow functions

let sum2 = (a, b) => a + b

function isPositive(number) {
    return number >= 0
    
}
let isPositive2 = number => number >= 0
    

function randomNumber(num) {
    return num + Math.random();

}
let randomNumber2 = num => num + Math.random();
const value = randomNumber2(4);
console.log(value)  


// document.addEventListener('click', function() {
// //   console.log('click');
// })
// document.addEventListener('click', ()=> console.log('click'))


class Person {
    constructor(name) {
        this.name = name
    }
    // DEFINE IN BLOCK SCOPE
    printNameArrow() {
        setTimeout(()=> {
            console.log('Arrow:', this.name)
        }, 100)
    }
// Redefine & Global SCOPE
    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name)
        }, 100)
    }
}

let person = new Person('Emmanuel');

person.printNameArrow();
person.printNameFunction();