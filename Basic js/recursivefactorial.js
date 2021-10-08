
//n!= (n - 1)! * n
//8! = (8 -1)*8    //(1*2*3*4*5*6*7*8)
function factorial(n){
    
    if(n == 0){
        return 1;
    }
    
    else{
        return n * factorial(n - 1);
    }
}
var result = factorial(0);
console.log(result)