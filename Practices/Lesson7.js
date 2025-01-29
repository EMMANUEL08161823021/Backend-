// CLOSURES

function outerFunction (outside) {
    return function innerFunction (inner) {
        console.log('outerFunction: ' + outside )
        console.log('innerFunction: ' + inner )
    }
}

const newFunction = outerFunction('outside');

newFunction("inside");
