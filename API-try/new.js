

class Person{
    constructor(firstName, lastname, salary) {
        this.firstName = firstName
        this.lastname = lastname
        this.salary = salary
    }
}
function Person1(firstName, lastname, salary) {
    this.firstName = firstName
        this.lastname = lastname
        this.salary = salary
}
const heroPerson = new Person('Md. Zubaer', "Al Mamun", 20000000)
console.log(heroPerson)
const normalPerson = new Person1('Md. Murshedul', "Alam", 60000)
console.log(normalPerson)