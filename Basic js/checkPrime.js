
// var number = 32;

function isprime(number){
    for(i = 2;i < number; i++){
        // console.log(i, number % i)
    
        if(number%i == 0){
           return 'Not a prime number, Please Try again';
        }
}
    return 'your number is a prime number';
}

var result = isprime(7);
console.log(result)


