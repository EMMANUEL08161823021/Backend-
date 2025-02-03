// Hoisted function declaration (works before declaration)
console.log(`addition: ${addition(2, 3)}`); // ✅ Works!

function addition(a, b) {
    return a + b;
}

// Function expressions (not hoisted)
const sum = (a, b) => a + b;
let letSum = (a, b) => a + b;

console.log(`sum: ${sum(2, 3)}`); // ✅ Works after declaration
console.log(`letSum: ${letSum(2, 3)}`); // ✅ Works after declaration

// ❌ Calling sum() or letSum() before declaration would cause an error
