// Create a symbol
const sym1 = Symbol()
const sym2 = Symbol('sym2')

console.log(sym1,typeof sym2);

console.log(Symbol() == Symbol());
console.log(Symbol('123') == Symbol('123'));

console.log(`Hello ${String(sym1)}`);

// Unique Object Keys
const key1 = Symbol()
const key2 = Symbol('sym2')

const myObj = {}

myObj[key1] = 'Prop1'
myObj[key2] = 'Prop2'
myObj.key3 = 'Prop3'
myObj.key4 = 'Prop4'
console.log(myObj[key1]);
console.log(myObj[key2]);

// Symbols are not enumerable in for...in
for(let i in myObj) {
    console.log(`${i}: ${myObj[i]}`);   
}
// Symbols are ignored by JSON stringify 
console.log(JSON.stringify(myObj));