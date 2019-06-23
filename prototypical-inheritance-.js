// Person contructor
function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

// Greeting
Person.prototype.gretting = function() {
    return `Hello there, ${this.firstName} ${this.lastName}`
}

const person1 = new Person('John', 'Wick')
console.log(person1.gretting());


// Customer constructor



function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName)

    this.phone = phone
    this.membership = membership
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype)

// make customer.protype return Customer()
Customer.prototype.constructor = Customer

// Create customer 
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard')

console.log(customer1);
// Customer greeting
Customer.prototype.gretting = function() {
    return `Hello there, ${this.firstName} ${this.lastName} welcome to our company`
}

console.log(customer1.gretting())

