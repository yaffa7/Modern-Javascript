// Destructuring Assignment


let a, b;

[a,b] = [100, 200]
// Rest pattern
// [a,b,c, ...rest] = [100, 200, 300, 400, 500]

({a, b} = {a: 100, b:200, c: 300, d: 400, e: 500})


console.log(a,b);


const people = ['John', 'Beth', 'Mike']

const [person1, person2, person3] = people
console.log(person1, person2, person3);
