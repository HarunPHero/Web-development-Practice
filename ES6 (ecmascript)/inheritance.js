class Parent{
    constructor(){
        this.father = "Freind Baba"
    }
}
class Child extends Parent{
    constructor(childName){
        super()
        this.name = childName;
    }

}
const child1 = new Child("Mamun")
const child2 = new Child("Murshedul")
console.log(child1, child2);