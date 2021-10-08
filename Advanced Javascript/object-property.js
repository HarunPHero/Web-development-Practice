
const students = [

    { Name: "Md. Zubaer Al Mamun", id: 21 },
    { Name: "Md. Mahmud hasan Sadique", id: 22 },
    { Name: "Md. Murshedul Alam", id: 23 },
    { Name: "Md. Sabbir Ahmed Apon", id: 24 }

];

const Name = students.map(x => x.Name);
const id = students.map(x => x.id)
const bigger = students.filter(x => x.id < 22)
console.log(Name, id)
console.log(bigger)