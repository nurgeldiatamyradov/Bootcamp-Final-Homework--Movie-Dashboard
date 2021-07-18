

const API_URL = 'https://api.tvmaze.com/shows';

const search_URL = 'https://api.tvmaze.com/search/shows'

const topRatedTvSows = document.getElementById('topRatedTvShow');

const randomSugg = document.getElementById('random-sugg');

const form =  document.getElementById('form');
const search = document.getElementById('search');


getTvShows(API_URL);

function getTvShows(url) {
    fetch(url).then(res => res.json()).then(data => {
        showTvShows(data);

        randomSuggs(data);
    })
}

function showTvShows(data) {
    topRatedTvSows.innerHTML = '';
    data.forEach(TvShow => {
        const { name, image, rating, summary, genres } = TvShow;
        const TvShowE1 = document.createElement('div');
        TvShowE1.classList.add('movie');
        TvShowE1.innerHTML = `
        <img src="${image.medium}" alt="${name}">
        <div class="tvShow-info">
        <h3>${name}</h3>
        <span class="">${rating.average}</span>
        </div>
        <div>${summary} </div>
        <div>${genres} </div>
        `
        topRatedTvSows.appendChild(TvShowE1);
        
    })
}

function randomSuggs(data) {
    randomSuggs.innerHTML = '';
    //let num = Math.floor(Math.randoma() * 100)
   let random = data[10];
      function suggestion(random) {
        let {name, image, premiered, genres} = random;
        let randomEl = document.createElement('div');
        randomEl.classList.add('random-sugg')
      randomEl.style.backgroundImage = 'url("'+ image.original+ '")';
      
      randomEl.innerHTML = `
      
      <h3 class="random-sugg__name">${name}</h3>
  
      <span class="random-sugg__release">Release Date: ${premiered}</span>

      <span> ${genres} </span>


      `
  
      randomSugg.append(randomEl)
      }
      suggestion(random)
      
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    
    
    if(searchTerm) {
        getTvShows(search_URL+'?q=${query}'+searchTerm)
    }

})