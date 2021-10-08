
var marks = [99, 95, 93, 81, 23, 45, 33, 79, 88, 94, 100, 96];
var max = marks[0];
for(var i = 0; i < marks.length; i++){
    var elements = marks[i]
    if(elements > max){
        max = elements
    }

} 

console.log("Highest mark is:", max)


/////////////////////////////////////SUM\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function arraySum(numbers){
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
        var elements = numbers[i];
        sum = sum + elements;
    
    }
    return sum;

}
var numbers = [2, 33, 9, 5, 10, 99, 56, 45, 87]
var result = arraySum(numbers) 
console.log("Total:", result)