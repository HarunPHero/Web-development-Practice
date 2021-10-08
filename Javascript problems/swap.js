

var a = 7;
var b = 2;
console.log('before swap:a=', a, 'b=', b)

var temp = a; //a ke temporary er vitore rakhlam
var a  = b;//b ke a er moddhe dhale dilam
var b = temp;//temp(a) ke b er moddhe dhale dilam
//olotpalot(success) 

console.log('after swap:a=', a, 'b=', b)

////////////////////////////////////////////////

var x = 17;
var y = 12;
x = (x + y);
y = (x -y)
x = (x - y) 

console.log('x=', x, 'y=', y)

////////////////////////////////////////////////////////

var p = 22;
var q = 27;
[p, q] = [q, p] ;
console.log('p=', p, 'q=', q)