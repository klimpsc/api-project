fetch('https://openlibrary.org/search.json?q=the+lord+of+the+rings')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
