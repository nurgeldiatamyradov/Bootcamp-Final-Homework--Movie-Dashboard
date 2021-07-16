console.log("mal")

const API_URL = 'https://api.tvmaze.com/shows';

const topRatedTvSows = document.getElementById('topRatedTvShow');

getTvShows(API_URL);

function getTvShows(url) {
    fetch(url).then(res => res.json()).then(data => {
        showTvShows(data)
    })
}

function showTvShows(data) {
    topRatedTvSows.innerHTML = '';
    data.forEach(TvShow => {
        const { name, image, rating, summary, genres } = TvShow;
        const TvShowE1 = document.createElement('div');
        TvShowE1.classList.add('TvShow');
        TvShowE1.innerHTML = `
        <img src="${image.medium}" alt="${name}">
        <div class="TvSow-info">
        <h3>${name}</h3>
        <span class="">${rating.average}</span>
        </div>
        <div>${summary} </div>
        <div>${genres} </div>
        `
        topRatedTvSows.appendChild(TvShowE1);
        
    })
}

/*function getColor(vote_average) {
if (vote_average >= 8) {
    return 'green'
} else if (vote_average >= 5) {
    return 'orange'
} else {
    return 'red'
}
}*/