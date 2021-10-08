


document.body.style.background= 'tomato'
var first = document.getElementById('mamun');
first.style.fontSize = '45px';
first.style.backgroundColor = 'yellow';
first.style.color = 'red';
first.style.width = '500px';
first.style.textAlign= 'center';
first.style.marginLeft='25%';


var description = document.getElementsByClassName('description');
for(var i = 0;i<description.length;i++ ){
  var element = description[i];
  element.style.backgroundColor = ' white'
 
}


var article = document.getElementById('Mamun')
var newElement = document.createElement('h3')
newElement.innerHTML = 'Md.Zubaer Al Mamun'
article.appendChild(newElement)

var article = document.getElementById('sadiq')
var newElement = document.createElement('h3')
newElement.innerHTML = 'Md.Mahmud Hasan Sadiq'
article.appendChild(newElement)
var article = document.getElementById('harun')
var newElement = document.createElement('h3')
newElement.innerHTML = 'Md.Harunur Rashid'
article.appendChild(newElement)
var article = document.getElementById('moni')
var newElement = document.createElement('h3')
newElement.innerHTML = 'Most. Jahanara Khatun'
article.appendChild(newElement)



var article = document.getElementById('gift')
var newElement = document.createElement('li')
newElement.innerHTML = 'cake'
article.appendChild(newElement)