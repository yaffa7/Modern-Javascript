// Create some arrays
const numbers = [43,56,33,23,44,36,5]
const numbers2 = new Array(43,56,33,23,44,36,5)
const fruit = ['Apple', 'banana', 'orange', 'pear']
const mixed = [22, 'hello', false, undefined, null, {a:1,b:2}, new Date()]
console.log(numbers, numbers2, mixed);

console.log(numbers);
// Get array length
console.log(numbers.length);
// Check if array
console.log(Array.isArray(numbers));
// Get single value
console.log(numbers[3]);
console.log(numbers[0]);
// Insert into array
numbers[2] = 100
console.log(numbers.indexOf(36));

// Mutating Arrays
// add on to end
numbers.push(300)
// add on to front
numbers.unshift(120)
// take off from end
numbers.pop()
// take off from front
numbers.shift()
// reverse
numbers.reverse()

// Concatenate Array
val = numbers.concat(numbers2)
console.log(val);
// Sorting arrays
console.log(fruit.sort());
console.log(numbers.sort());

// Use the compare function
console.log(numbers.sort(function(a,b) {
    return a - b
}));

// Reverse sort
console.log(numbers.sort(function(a,b) {
    return b - a
}));

// Find

function under50(num) {
    return num < 50
}

function over50(num) {
    return num > 50
}

console.log(numbers.find(under50));
console.log(numbers.find(over50));


console.log(numbers);
