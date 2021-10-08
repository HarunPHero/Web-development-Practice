
const Year = 2100;
let remainder = Year % 4;
if(remainder == 0){
    console.log("Your year is a Leapyear")
}
else{
    console.log("Your year is not a leapyear. Please wait for leapyear ")
}

function leapYear(Year){
    var result; 
    Year = parseInt(document.getElementById("isYear").value);
    if (Year/400){
      result = true
    }
    else if(Year/100){
      result = false
    }
    else if(Year/4){
      result= true
    }
    else{
      result= false
    }
    return result
 }