console.log("chotgo");

function searchShow(query) {
    const url =`https://api.tvmaze.com/search/shows?q=${query}`;
    fetch(url).then(response => response.json())
    .then((jsonData) => {
        const results = jsonData.map(element => element.show.name);
        console.log(results)
    })
}


window.onload = () => {
    const searchFieldEl = document.getElementById("searchTvShow");
    searchFieldEl.onkeyup = (event) => {
        searchShow(searchFieldEl.value);
    };
}