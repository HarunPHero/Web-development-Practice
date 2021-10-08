function evenify(number){

    if(number % 2 == 0){
        console.log(number, ': It is a even number')
    }
    else{
        console.log(number*2,': It is not a even number (odd number). Please, Try again')
    }
     
 
}
var numbers = [2, 1, 20, 34, 2, 46, 7];
for(var i = 0;i<numbers.length;i++){
    var number = numbers[i];
    evenify(number);
  }


friendAge = [12, 13, 14, 15, 16, 17];
for(var i = 0; i<friendAge.length;i++){
    var age = friendAge[i];
    evenify(age)

}