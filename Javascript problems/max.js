
Mamun = 110;
Murshedul = 12;
Apon = 10;

if(Mamun > Murshedul){
    if(Mamun > Apon){
        console.log('Mamun 1st')
    }
    else{
        console.log('Apon 1st')
    }

}
else if(Mamun == Murshedul,  Murshedul == Apon, Apon == Mamun){
    console.log('Shobai 1st')
}
else{
    if(Murshedul > Apon){
        console.log('Murshedul 1st')
    }
    else{
        console.log('Apon 1st')
    }
}

// max bair korar another rule
var max = Math.max(Mamun, Murshedul, Apon);
console.log(max)