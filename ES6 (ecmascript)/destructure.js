const student = { Name: "Md. Zubaer Al Mamun", age: 12, Class: 6, freinds: ["Murshedul", "Apon", "Fahim", "Munta", "sanjid"] }
//simple js.
const freinds = student.freinds;
//es6........
const { Name, age, Class } = student;
console.log(Name, freinds, age, Class)
console.log(Name, freinds)
console.log(Name, freinds)
console.log(Name, freinds)
////////////////////////////////////
const heroes = ['salman khan', 'shahrukh khan', 'amir khan']
const [bigHero, ...lastHero] = heroes;
console.log(bigHero, lastHero);
/////////////////////////////////////
const complexObject = {
    Name: "Md. Murshedul Alam",
    info: {
        Address: "Ondho hafez mor, Dinajpur",
        BrotherName: "Md. Mahmudul Alam"

    }
}
const { BrotherName } = complexObject.info;
console.log(BrotherName)