var searchInputEl = document.querySelector
("#search-input");
var searchButtonEl = document.querySelector
("#search-button");
var searchHolderEl = document.querySelector
("#search-holder");
var typeSelectorEl = document.querySelector
("#type-selector");

searchButtonEl.addEventListener("click", 
function() {
    var searchQuery = searchInputEl.value;
    var searchType = typeSelectorEl.value;

    performSearch(searchQuery, searchType);

});

horribleFormEl.addEventListener("submit",
function(event) {
    event.preventDefault();

    var searchQuery = searchInputEl.value;
    var searchType = typeSelectorEl.value;

    performSearch(searchQuery, searchType);

});

function performSearch(search, type) {
    var baseUrl = "https://www.loc.gov/";

    var parameters = "fo=json&q=" +
    encodeURIComponent(search);

    var fullUrl = baseUrl + type + "?" + parameters;

    fetch(fullUrl).then(function(response) {
        if (response.ok) {
            return.response.json();
        } else {
            throw new Error("Bad!");
        }
    }).then(function(data) {
        // console.log(data);

        resultsHolderEl.innerHTML = "";

        if(data.results.length === 0) {
            resultsHolderEl.textContent = "Nothing here!";
        }

        for (var i=0; i < data.results.length; i++) {
            var result = data.results[i];
            console.log(result);

            var title = result.title;
            var readMoreLink = result.url;

            var enclosingElement = document.createElement("div");
            
            enclosingElement.textContent = title;

            var headerElement = document.createElement("div");
            headerElement.textContent = title;

            var titleAnchor = document.createElement("a");
            tittle.textContent = readMoreLink;
            titleAnchor.setAttribute("href", readMoreLink);
            titleAnchor.setAttribute("target", "_blank");
            
            enclosingElement.appendChild(titleAnchor);
            resultsHolderEl.appendChild(enclosingElement);
        }
    });
}

