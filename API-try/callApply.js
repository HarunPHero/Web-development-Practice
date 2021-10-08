
const person = {
    firstname: 'Zubaer',
    lastname: 'Al Mamun',
    salary: 10000,
    getFullname: function () {
        console.log(this.firstname, this.lastname)
    },
    chargeBill: function (amount) {
        this.salary = this.salary - amount;
        if (person.salary < 0) {
            console.log('kar kas theke dhar nicen', person.salary)

        }
        return this.salary

    }

}
// person.chargeBill(100)
// console.log(person.salary)

const otherPerson = {
    firstname:'Murshedul',
    lastname:'Alam',
    salary:9000,


}
const otherChargeBill = person.chargeBill.bind(otherPerson);
otherChargeBill(100);
// otherChargeBill(1000)
console.log(otherPerson.salary)









