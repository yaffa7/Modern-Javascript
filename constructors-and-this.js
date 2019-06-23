// Person constructor

function Person(name = 'no name', age = 30, dob) {
    this.name = name
    this.age = age
    this.birthday = new Date(dob)
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime()
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
}

console.log(this);
const brad = new Person('Brad',25)
const john = new Person('John', 46)
console.log(brad);
console.log(john);

const brad2 = new Person('Brad', null ,'9-10-1981')
console.log(brad2);
console.log(brad2.calculateAge());
