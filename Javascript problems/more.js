
function fibonacciSeries(num){
    var fibo = [1, 1];
    for(var i = 2; i <= num;i++){
        var nextFibo = fibo[i-1] + fibo[i-2];
        fibo.push(nextFibo);
    }
    return fibo;
}
// var result = fibonacciSeries(9);
// console.log(result);

function fibonacciRecursion(num){
    if(num == 0){
        return [1];
    }
    if(num == 1){
        return[1, 1];
    }
    else{
        var fibo = fibonacciRecursion(num -1);
        var nextFibo = fibo[num-1] + fibo[num-2];
        fibo.push(nextFibo);
        return fibo;
    }
}
var result = fibonacciRecursion(10);
console.log(result);

function add(firstNumber, secondNumber, thirdNumber){
    var sum = firstNumber + secondNumber + thirdNumber;
    return sum;
}

function add2(number){
    var sum = number[1]+ number[2]+number[3];
    return sum;
}

function add3(numbers){
    var sum = 0;

    for(var i = 0; i< numbers.length; i++){
        if(numbers[i] > 0){
            sum = sum + numbers[i];
        }
        
    }
    return numbers;
}
var result = add3(-99);
console.log(result)