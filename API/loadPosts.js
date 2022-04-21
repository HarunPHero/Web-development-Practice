
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}
function displayPosts(data){
    const postcontainer = document.getElementById('post')
    for(const users of data){
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
            <h4>${users.title}</h4>
            <p>${users.body}</p>
        `
        postcontainer.appendChild(div)
    }
    
}