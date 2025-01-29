// CALLBACK: Functions are just like objects

function print(value) {
    console.log(value)
}
print("Hello");

function useCallBack(callback) {
    callback("Emmanuel");
}
useCallBack(print);

function printName(person) {
    person([{name: 'Emmanuel', age: 10}, {name: 'Daniel', age: 3}]);
}
// const person = 
printName((value)=> console.log(value[1].name));

