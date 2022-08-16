const headerComponent  = function () {
    return `
        <header class>
            <h1>${movies.logo}</h1>
            <span class="material-symbols-outlined">
            menu
            </span>
        </header>
    `
}


const movieCardComponent = function () {
    html = ""

    for (movie of movies.cards) {
        html +=
        `   <div class="cards-container">
                <div class="cards-inner">
                <p class="numbers">${movie.number}</p>
                <h1 class="title">${movie.title}</h1>
                <h2 class="sub">${movie.sub}</h2>
                <p class="text">${movie.text}</p>
                <button class="watch">${movies.button}</button>
                </div>
            </div>
        `
    }

return html 
}

const loadEvent = function () {

    const rootElement= document.getElementById("root");

    rootElement.insertAdjacentHTML("beforeend", headerComponent())
    rootElement.insertAdjacentHTML("beforeend", movieCardComponent())

}
    
    window.addEventListener("load", loadEvent);