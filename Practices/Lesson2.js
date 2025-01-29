// Functions
// A function stores a code to execute.

// Functions are like the building blocks of a program. They promote:

// Reusability
// Readability
// Maintainability
// Scalability

// Example1 Without Argument
function dataPlans () {
    console.log("Subscribe 1000 airtime when my data finishes")
}
dataPlans();


// Example2 Using arguments
function multipy (x, y) {
    console.log(x * y);
}
multipy(4, 5);

// or

function multipy (x, y) {
    return x * y;
}
const answer = multipy(4, 3)
console.log(answer);
