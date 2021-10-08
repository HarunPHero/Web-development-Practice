
function factorial(num){
    var fact = 1;
    for(var i = 1; i <= num; i++){
        fact = fact * i;
        // console.log(i, fact)

    }
    return fact;
}

function factorialRecursive(num) {
    if(num == 1){
        return 1;
    }
    else{
        return num * factorial(num - 1)
    }
    
}
var result = factorialRecursive(10);
console.log('Result', result)