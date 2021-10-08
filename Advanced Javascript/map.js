
const numbers = [2, 3, 4, 5, 6, 7];
// const output = [];
// for (let i = 0; i < numbers.length; i++){
//     const elements = numbers[i];
//     const result = elements * elements;
//     output.push(result);
   
// }

// function square(elements) {
//     return elements * elements;
// }
// const result = numbers.map(function(elements) {
//     return elements * elements;
    
// })
const result = numbers.map(x => x * x)
console.log(result)
const bigger = numbers.filter(x => x > 5);
console.log(bigger)
const isThere = numbers.find(x => x > 5);
console.log(isThere)

