const searchMovie = async (title) => {
    const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=d934e3c0`);
    const data = await response.json();
    return data;
}



const button = document.querySelector('.btn');
const mainContent = document.querySelector('.film');
mainContent.style.display = 'flex';
mainContent.style.flexDirection = 'column';
const inputSearch = document.querySelector('.form-control');
let movie;

clickSearch = async () => {

    await inputSearch.addEventListener('input', async () => {
        movie = await searchMovie(inputSearch.value);
        console.log('search', movie);
        if (movie) {
            button.disabled = false;
        }
    });

    await button.addEventListener('click', (e) => {
        e.preventDefault();
        if(movie) {
            const searchValue = document.createElement('div');
            searchValue.className = 'items';
            searchValue.style.backgroundColor = 'white';
            searchValue.style.margin = '10px';
            searchValue.innerHTML = `
                <h1>Film: ${movie.Title}</h1>
                <p>Years: ${movie.Year}</p>
                <a href="https://www.imdb.com/title/${movie.imdbID}">Details</a>`;
            mainContent.appendChild(searchValue);
            scrollTo(0, 700);
        } else {
            console.log('No movie found');
        }

    })
};


clickSearch();

