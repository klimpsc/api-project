async function fetchData() {
    const response = await fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings");
    const books = await response.json();
    console.log(books);
  }
fetchData()
