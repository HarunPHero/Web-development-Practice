
function explain_callback(name, age, task){
    console.log('Hello', name);
    console.log('Your age is', age, 'years old');
 task(); 
// console.log(task)


}
function washhand(){
    console.log('Wash your hand ')
}
function takeShower(){
    console.log('take a shower')
}
function read(){
    console.log('read now')
}
explain_callback('Md.Zubaer Al Mamun', 12, washhand);
explain_callback('Md. Mahmud hasan Sadiq', 6, takeShower)
explain_callback('Md. Murshedul Alam', 13, read)