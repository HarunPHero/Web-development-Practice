
class Student{
    constructor(sId, Sname){
        this.id = sId;
        this.name = Sname;
        this.school = "Dinajpur Zilla School, Dinajpur "
    }

}
const Student1 = new Student(1, "Mamun");
const Student2 = new Student(2, "Murshedul");
const Student3 = new Student(3, "Sadiq")
console.log(Student1.name, Student2.id, Student3.name);

const  