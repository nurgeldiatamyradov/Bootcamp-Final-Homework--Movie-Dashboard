

function searchShow(query) {
    const url ='https://api.tvmaze.com/search/shows?q=${query}';
    fetch(url).then(response => response.json())
    .then((jsonData) => {
        const results = jsonData.map(element => element.show.name);
        renderResults(results);
    })
}

function renderResults(results) {
    const list = document.getElementById("resultsList");
    list.innerHTML = "";
    results.forEach(result => {
        const element = document.createElement("li");
        element.innerHTML = result;
        list.appendChild(element);
    });
}


let searchTimeoutToken = 0;

window.onload = () => {
    const searchFieldEl = document.getElementById("searchTvShow");
    searchFieldEl.onkeyup = (event) => {

        clearTimeout(searchTimeoutToken);

        if (searchFieldEl.value.trim().length === 0) {
            return;
        }

        searchTimeoutToken = setTimeout(() => {
            searchShow(searchFieldEl.value);  
        }, 250)
    };
}