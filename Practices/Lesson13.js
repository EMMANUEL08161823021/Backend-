const numbers = [1, , 3, 4, 5, 6];

const fruits = ['apple', 'orange', 'mango', 'watermelon', 'cucumber'];

const [first, , third, ...others] = numbers


// const firstNumber = numbers[1];

console.log(first, third, others); 

const firstPerson = {
    name: 'Emmanuel',
    hobbies: ['coding', 'football'],
    age: 12,
    favouriteFood: 'Kosiyenmo',
    address: {
        number: 25,
        street: 'Olarenwaju Street'
    }
}


const secondPerson = {
    name: 'Jadon',
    hobbies: 'baseball',
    age: 30,
    favouriteFood: 'Pizza',
    address: {
        number: 14,
        street: 'San Siro'
    }
}

// const {name: firstname = 'Mason', hobbies} = secondPerson;.


const { address : { number } , favouriteFood } = firstPerson;


// console.log(address);

const thirdPerson = {...firstPerson, ...secondPerson}


console.log(thirdPerson);


