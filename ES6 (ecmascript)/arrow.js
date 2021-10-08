
// //simple js......
// function doubleIt(num) {
//     return num * 2;
    
// }
// const result = doubleIt(3);
// console.log(result)

// //or.......
// const doubleIt2 = function(num){
//     return num * 4;
// }
// const result2 = doubleIt2(5);
// console.log(result2)

//but ecmascript........
const doubleIt3 = num => num * 2;

const add = (x, y) => x + y;

const doMath = (x, y) => {//multiline arrow
    const sum = x + y;
    const diff = x - y;
    const total = sum + diff;

    return total;
}
const result = doubleIt3(30);
console.log(result);
const result2 = add(12, 6);
console.log(result2);
const result3 = doMath(13, 7);
console.log(result3);