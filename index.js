console.log('Javascript is successfully connected!')
//global selectors
let addBtn = document.querySelector('form')

// Functions
function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle)
    document.querySelector('ul').appendChild(movie)
    inputField.value = ''
}

//Event Listeners
addBtn.addEventListener('submit', addMovie)