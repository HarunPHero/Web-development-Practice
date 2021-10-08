function reverseString(str){
    var reverse ="";
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse
}
var result = reverseString('Hi I am Mamun')
console.log(result)