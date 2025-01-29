// HOISTING : It takes some of your code and move to the top of your file (Not visible tho, but that how it works.)


// Works before declaration only
const sum = (a, b) => a + b;
let letSum = (a, b) => a + b;

console.log(`addition: ${addition(2, 3)}`);
console.log(`sum: ${sum(2, 3)}`);
console.log(`letSum: ${letSum(2, 3)}`);

// Works before or after declaration (Hoisting)
function addition (a, b) {
    return a + b;
}