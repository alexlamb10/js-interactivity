console.log('Javascript is successfully connected!');
//global selectors
let addBtn = document.querySelector('form');

// Functions
function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    movie.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', deleteMovie)
    document.querySelector('ul').appendChild(movie);
    inputField.value = '';
}

function deleteMovie(event){
    event.target.parentNode.remove()
}
//Event Listeners
addBtn.addEventListener('submit', addMovie);
