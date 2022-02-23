console.log('Javascript is successfully connected!');
//global selectors
let addBtn = document.querySelector('form');
let message = document.getElementById('message')

// Functions
function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    movie.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', deleteMovie)
    document.querySelector('ul').appendChild(movie);
    inputField.value = '';
}

function deleteMovie(event){
    event.target.parentNode.remove();
    message.textContent = 'Movie deleted!'
    revealMessage()
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = event.target.textContent + ' watched!'
    }else{
        message.textContent = event.target.textContent + ' added back!'
    }
    revealMessage()
}

function revealMessage(){
    message.classList.remove('hide')
    setTimeout(()=> {message.className = 'hide'}, 1000)
}
//Event Listeners
addBtn.addEventListener('submit', addMovie);
