var Price = 10;
console.log(typeof Price)

var roll = 7;
console.log(roll)

var MobileName = "Samsung";
console.log(typeof MobileName)

var brotherName = "Md. Mahmud Hasan Sadiq";
console.log(brotherName)

var age = 42;
console.log(typeof age)

var isPoor = false;
console.log(typeof isPoor)




var name = "MD. MAHMMUD HASAN SADIQ";
console.log(name.indexOf('SADIQ'))

var fatherName = "Md. Harunur Rashid";
console.log(fatherName.toLowerCase())

var motherName = "Most. Jahanara khatun";
console.log(motherName.toUpperCase())

var myName = "Md. Zubaer Al Mamun";
console.log(myName.split("Md."))





var number1 = 25;
var number2 = '15.6';
number2 = parseFloat(number2)
console.log(number1 + number2)

var number1 = 25;
var number2 = '15.6';
number2 = parseInt(number2)
console.log(number1 + number2)


var price1 = 200;
var price2 = 300;
var total = price2 - price1;
console.log(total)


var price1 = 200;
var price2 = 330;
var total = price2 % price1;
console.log(total)


var number = 10.99
var result = Math.round (number)
console.log(result)

var number = 10.99
var result = Math.floor(number)
console.log(result)


var number = 10.99
var result = Math.ceil(number)
console.log(result)

var number = 10.99
var result = Math.random(number)
console.log(result)

var number = Math.random() * 10;
var result = Math.floor(number)
console.log(result)



var onionPrice = 200
if(onionPrice < 100){
    console.log("I will buy the onions")
}
else{
    console.log("Poche jak tor onion")

}

var onionPrice = 200
if(onionPrice > 100){
    console.log("I will buy the onions")
}
else{
    console.log("Poche jak tor onion")

}

var onionPrice = 200
if(onionPrice == 100){
    console.log("I will buy the onions")
}
else{
    console.log("Poche jak tor onion")

}

var onionPrice = 200
if(onionPrice != 100){
    console.log("I will buy the onions")
}
else{
    console.log("Poche jak tor onion")

}

var Pass = false;
var totalNumber = 570

if(Pass == true && totalNumber > 565){
   console.log("bagher bacca")
}
else if(totalNumber > 565){
    console.log("accha jak pass korish nai number ta to paisish....")
}
else{
    console.log("tham tor news ase")

}


var date = new Date()
var total = Math.round(date);
console.log(total)




var total = 63;
if(total >= 80){
    console.log("A+")
}
else if(total >= 79){
    console.log("A")
}
else if(total >= 60){
    console.log("A-")
}
else if(total >= 59){
    console.log("B")
}
else if(total >= 49){
    console.log("C")
}
else if(total >= 34){
    console.log("D")
}
else{
    console.log("tui fail (F)")

}
   

