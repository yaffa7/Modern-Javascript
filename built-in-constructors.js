// String

let name1 = 'Jeff'
const name2 = new String('Jeff')

// name2.foo = 'bar'
// console.log(name1, name2);

console.log(typeof name2);

if(name2 === 'Jeff') {
    console.log('YES');
} else {
    console.log('NO');
}


// Number
const num1 = 5
const num2 = new Number(5)

console.log(typeof num2);


// Boolean 
const bool1 = true
const bool2 = new Boolean(false)

console.log(typeof bool2);


// Functions
const getSum1 = function(x,y) {
    return x + y
}

console.log(getSum1(2,3,));

const getSum2 = new Function('x','y', 'return 1 + 1')

console.log(getSum2());

// Object
const john1 = {name: 'John'}
const john2 = new Object({name: "john"})
console.log(john2);

// Arrays
const arr1 = [1,2,3,4]
const arr2 = new Array(1,2,3,4)

console.log(arr1);
console.log(arr2)

// Regular Expressions
const re1 = /\w+/
const re2 = RegExp('\\w+')

console.log(re1);
console.log(re2);



