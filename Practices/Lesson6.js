// Scoping: Block, Function, Module, Global

// Function Scope
function currency(num) {
    const name = 'Emmanuel';

    // Block Scope
    if(num) {
        // const name = 'Ayomide'; In this case, const name in the block scope is superior to const name in Function Scope.
        const number = num * 1650 
        
        // Block Scope and Function Scaope can be declared.
        console.log(name, number);
    }
    // Block Scope cannot be declared.
    // console.log(name);


}
currency(4);


// Global Scope is a script file that is accessible everywhere. 
{/* <script defer src=""></script> */}


// Module Scope: We use export and import it to the file needed.
{/* <script type="module" src=""></script> */}

// For Example
// export
// export const exportedVar = "Exported"

// import
// import const exportedVar from "./script.js"

