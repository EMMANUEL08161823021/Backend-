// Arrays and Object

const level = ['100', '200', '300', '400', '500'];

level.push(['Engr', 'Science', 'Art'])


console.log(level[5][2]);

const items = [
    {name: 'Jersey', price: 300},
    {name: 'Boots', price: 500},
    {name: 'Socks', price: 100},
    {name: 'Shinguard', price: 50},
    {name: 'Ball', price: 150},
    {name: 'Band', price: 50},
]

const filteredItems = items.filter((item)=> {
    return item.price <= 100
})
console.log(filteredItems);


const mapItems = items.map((item)=> {
    return item.price
})
console.log(mapItems);

const foundItems = items.find((item)=> {
    return item.price === 300
})
console.log(foundItems);

items.forEach((item)=> {
    console.log(item.name);
})

const total = items.reduce((currentTotal, item)=> {
    return item.price + currentTotal
}, 0)
console.log(total); 

const include = level.includes('200');

console.log(include);



// TRUE OR FALSE
const toCheckASpecificItem = items.some((item)=> {
    return item.name === 'Boots'
})
console.log(toCheckASpecificItem);

const toCheckTheRange = items.every((item)=> {
    return item.price >= 50
})
console.log(toCheckTheRange); 



