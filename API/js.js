
const student = { id: 2, Name: "Md. Murshedul Alam" };
const studentJSON = JSON.stringify(student)
console.log(studentJSON)
const studentJSON2 = JSON.parse(studentJSON)
console.log(studentJSON2)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => displayUser(json))
    .catch(error => alert("check your internet connection"))

function displayUser(users) {

    const userNames = users.map(users => users.name)

    const ul = document.getElementById("container")
    for (let i = 0; i < userNames.length; i++) {
        const userName = userNames[i];
        const li = document.createElement("li");

        li.innerText = userName;

        const result = ul.appendChild(li);
        console.log(result)


    }
}
// const post = { title: "foo", body: "bar", userId: 1 }
document.getElementById("SUBMIT").addEventListener("click", function() {
    const title= document.getElementById("title").value;
    const bodyContent = document.getElementById("main").value;
    const post = {title:title, main:bodyContent};
    nowPosttoServer(post)
})

function nowPosttoServer(post) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ post }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch(error => alert("please try again later"))



}

