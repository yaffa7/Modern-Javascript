const person = {
    firstName: 'Steve',
    lastname: 'Smith',
    age: 35,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'Florida'
    },
    getBirthYear:  function() {
        return 2019 - this.age
    }
}

console.log(person);

console.log(person.firstName);
console.log(person['firstName']);
console.log(person.age);
console.log(person.hobbies[1]);
console.log(person.address.state);
console.log(person.address['city']);
console.log(person.getBirthYear());


const people = [
    { name: 'John', age: 30 },
    { name: 'Mike', age: 34 }
]

for(let i = 0;i < people.length;i++) {
    console.log(people[i].name);
    console.log(people[i].age);
}