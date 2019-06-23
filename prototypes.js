// Object.prototype
// Person.prototype

function Person(firstName = 'no name', lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.birthday = new Date(dob)
    // this.calculateAge = function() {
    //     const diff = Date.now() - this.birthday.getTime()
    //     const ageDate = new Date(diff)
    //     return Math.abs(ageDate.getUTCFullYear() - 1970)
    // }
}

// Calculate age

Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

// Get full name

Person.prototype.getFullname = function () {
    return `${this.firstName} ${this.lastName}`
}

// Gets Married

Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName
}

const john = new Person('John', 'Wick', '8-24-1993')
const marry = new Person('Marry', 'Smith', '4/22/56')

console.log(marry);

console.log(john.calculateAge());
console.log(marry.getFullname());
marry.getsMarried('Wick')
console.log(marry.getFullname());


console.log(marry.hasOwnProperty('firstName'))
console.log(marry.hasOwnProperty('getFullName'))
