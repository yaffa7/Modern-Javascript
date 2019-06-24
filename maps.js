// Maps = key value pairs - can use any type as a key or a value

const map1 = new Map()

// Set some keys
const key1 = 'some string'
const key2 = {}
const key3 = function() {}

// Set map values by key
map1.set(key1, 'Value of key1')
map1.set(key2, 'Value of key2')
map1.set(key3, 'Valur of key3')

// Get values by key
console.log(map1.get(key1),map1.get(key2), map1.get(key3));

//Count values
console.log(map1.size);

// Iterating maps

// Loop using for..of

for(let key of map1.keys()) {
    console.log(key);
}
// Iterate values only
for(let value of map1.values()) {
    console.log(value);
}

// Loop with forEach
map1.forEach(function(value, key) {
    console.log(`${key} = ${value}`);
    
})


// Convert sets to arrays

// Create an array of the key value pairs
const keyValArr = Array.from (map1)

keyValArr.forEach(function(a) {
    console.log(a);
})

// Create an array of the value 
const valueArr = Array.from (map1.values)

keyValArr.forEach(function(a) {
    console.log(a);
})
