

const API_URL = 'https://api.tvmaze.com/shows';

const topRatedTvSows = document.getElementById('topRatedTvShow');

const randomSugg = document.getElementById('random-sugg');


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

function randomSuggs(data) {
    randomSuggs.innerHTML = '';
    //let num = Math.floor(Math.randoma() * 100)
   let random = data[7];
      function suggestion(random) {
        let {name, image, premiered} = random;
        let randomEl = document.createElement('div');
        randomEl.classList.add('random-sugg')
      randomEl.style.backgroundImage = 'url("'+ image.original+ '")';
      
      randomEl.innerHTML = `
      
      <h3 class="random-sugg__name">${name}</h3>
  
      <span class="random-sugg__release">${premiered}
      `
  
      randomSugg.append(randomEl)
      }
      suggestion(random)
      
  }