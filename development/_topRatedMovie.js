const API_KEY = 'api_key=9b619a5d79d007c4b1553d2a5f3cbfe5';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https:/image.tmdb.org/t/p/w500'

const topRatedMovie = document.getElementById('topRatedMovie');

getMovies (API_URL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showMovies(data.results);
    })
}

function showMovies(data) {
    topRatedMovie.innerHTML = '';
    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieE1 = document.createElement('div');
        movieE1.classList.add('movie');
        movieE1.innerHTML = `
        <img src="${IMG_URL+poster_path}" alt="${title}">
        <div class="movie-info"> 
        <h3>${title}</h3>
        <span class="${getColor(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
        <h3>Overview</h3>
        ${overview}
        </div>
        `
        topRatedMovie.appendChild(movieE1);
    })

}

function getColor(vote_average)  {
    if(vote_average>=8) {
        return 'green'
    }else if(vote_average>=5) {
        return 'orange'
    }else{
        return 'red'
    }
}