
function loadusers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}

function displayUsers(data) {
    const h4 = document.getElementById('users')
    for (const users of data) {
        const li = document.createElement('ul')
        li.innerText = users.name
        h4.appendChild(li)
    }


}