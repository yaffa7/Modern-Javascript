// For Loop

for(let i = 0;i < 10;i++) {
    if(i === 2) {
        console.log('2 is my fav nubmer');
        continue
    }

    if (i === 5) {
        console.log('stop the loop');
        break;
    }
    console.log('Number ' + i);
}

// While Loop

let i = 0

while(i < 10) {
    console.log('Number ' + i);
    i++
}

let j = 100

do {
    console.log('Number ' + j);
    j++
} while (j < 10)

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota']

for(let i = 0;i < cars.length;i++) {
    console.log(cars[i]);
}

cars.forEach(function(car, index, arr) {
    console.log(`${index} : ${car}`);
    console.log(arr) 
})


const users = [
    {id:1, name: 'john'},
    {id:2, name: 'sara'},
    {id:3, name: 'karen'}
]

const ids = users.map(function(user) {
    return user.id
})

console.log(ids);

// Custom map!

users.mappy = function(func) {
    this.forEach(function(a) {
        return func(a)
    })
}

users.mappy(function(a) {console.log(a.id);})
users.mappy(function(a) {console.log(a.name);})

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user) {
    console.log(`${x} : ${user[x]}`);
}

