class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.birthday = new Date(dob)
    }

    gretting() {
        return `hello there ${this.firstName} ${this.lastName}`
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime()
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    getsMarried(newLastname) {
        this.lastName = newLastname
    }

    static addNumbers(x,y) {
        return x + y
    }
}

const mary = new Person('Mary', 'Williams', '11-13-1980')


console.log(mary.gretting());

mary.getsMarried('Thompson')

console.log(mary.gretting());

console.log(mary.calculateAge());

console.log(Person.addNumbers(5,7));
