

function dosomthing() {
    console.log(3333)
}
console.log(2222)
setTimeout(dosomthing, 10000)
setTimeout(() => {
    console.log('see you later')
},  1000)
setInterval(() => {
    console.log('hi Mamun');
    
}, 10000);
console.log(4444)
console.log(5555)
