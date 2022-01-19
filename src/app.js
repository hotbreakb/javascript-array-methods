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
const itemsNames = items.filter((item) => {
    return item.price <= 100;
});

// console.log(items) // not changing
// console.log(filteredItems)

// (2) map - make array containing only key or value
const itemsNames = items.map((item) => {
    return item.name
});

console.log(items)
console.log(itemsNames) // ["Bike", "TV", "Album", "Book", "Phone", "Computer", "Keyboard"]