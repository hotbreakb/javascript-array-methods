const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },
];

// (1) filter
const filteredItems = items.filter((item) => {
    return item.price <= 100;
});

// console.log(items); // not changing
// console.log(filteredItems);

// (2) map - make array containing only key or value
const itemsNames = items.map((item) => {
    return item.name;
});

// console.log(items); // not changing
// console.log(itemsNames); // ["Bike", "TV", "Album", "Book", "Phone", "Computer", "Keyboard"]

// (3) find - first item in the array which true in func
const foundsNames = items.find((item) => {
    return item.price <= 100;
});

// console.log(items); // not changing
// console.log(foundsNames); // {name: "Bike", price: 100}

// (4) forEach
items.forEach(item => {
    // console.log(item.name);
});

// (5) some
let hasInexpensiveItems = items.some(item => {
    return item.price <= 100;
});

// console.log(hasInexpensiveItems); // true

// (6) every
hasInexpensiveItems = items.every(item => {
    return item.price <= 100;
});

// console.log(hasInexpensiveItems); // false

// (7) reduce - 누적값, 현재값, 시작값(0)
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0);

// console.log(total); // 1840

// (8)
const numbers = [1, 2, 3, 4, 5];
const includeTwo = numbers.includes(2);
console.log(includeTwo); // true
