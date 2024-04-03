fetch('https://openlibrary.org/search.json?q=the+lord+of+the+rings')
    .then(response => response.json())
    .then(data => console.log(data.numFound))
    .catch(error => console.error(error));

fetch('https://openlibrary.org/search.json?q=the+lord+of+the+rings')
    .then(response => response.json())
    .then(data => console.log(data.cover_i))
    .catch(error => console.error(error));