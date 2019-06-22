const firstName = 'William'
const lastName = 'Johnson'
const age = 45

console.log(firstName + lastName);
// Concatenation
console.log(firstName + ' ' + lastName);

// Append
val = 'Brad'
val += 'Traversy'
console.log(val);

console.log('Hello, my name is ' + firstName + ' and I am ' + age);


// Escaping
console.log('That\'s awsome, I can\'t wait');


// Length

console.log(firstName.length);

// concat

console.log(firstName.concat(' ', lastName));

// To Uppercase / Lowercase

console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

console.log(firstName[2]);

// Index of

console.log(firstName.indexOf('l'));
console.log(firstName.lastIndexOf('l'));

// charAt()
console.log(firstName.charAt(6));

// Get last char
console.log(firstName.charAt(firstName.length - 1));

// substring

console.log(firstName.substring(0, 4));

// Slice
console.log(firstName.slice(0,4));
console.log(firstName.slice(-3));

// Split

console.log('Hello there my name is brad'.split(' '));

// replace
console.log('Hello there my name is brad'.replace('brad', 'jack'));


// includes

console.log('Hello there my name is brad'.includes('Hello'));
console.log('Hello there my name is brad'.includes('foo'));
