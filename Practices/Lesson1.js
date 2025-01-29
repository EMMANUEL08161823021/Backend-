// VAR, LET, AND CONST

// Works as a Function Scope and a Block Scope
if(true) {
    var varVariable = "I was assigned with Var";
    // You can declare a var Variable again
    
}
console.log(varVariable); /* => "I was assigned with Var" */

// You can declare a var variable before assigning them.
console.log(name); /*=> undefined*/

var name = 'Emmanuel'



// Block Scope
if(true) {
    let letVariable = "I was assigned with Let";
    // You can't declare a let Variable again
    // You can't declare a variable before assigning them.
    console.log(letVariable); /* => "I was assigned with Let" */
}
if(true) {
    const constVariable = "I was assigned with Const";
    // You can't declare a variable before assigning them.

    // You can declare a const Variable again BUT you can't change the properties.
    // For Example

    const school = {name: 'Unilag'}
    school.name = 'Uniben'
    console.log(school)

    console.log(constVariable);
}





