
//budgetCalculator
function budgetCalculator(phone, laptop, watch){
    
    console.log( phone * 100);
    console.log(laptop * 500)
    console.log(watch * 50);
    return phone,laptop,watch
}
var result = budgetCalculator(2, 3, 4);
console.log(result)

//kilometer to meter
function kilometerToMeter(n){
  
    var meter = n * 1000;
    return meter;
}
var result = kilometerToMeter(1);
console.log(result)



//hotel cost
function hotelCost(i){
    if(i <= 10){
        var weekCost = i * 100;
        total = weekCost
               
    }
    else if(i <= 20){

        var firstPart = i * 100
        var remaining = i-10; 
        var secondPart = remaining * 80
        total = firstPart + secondPart;
    }

    else{
        var firstPart = i * 100
    var secondPart = i * 80
    var remaining = i- 20; 
    var thirdPart = remaining * 50
   total = firstPart + secondPart + thirdPart;
    }

    return total;
}
var result =hotelCost(15)
console.log(result)


