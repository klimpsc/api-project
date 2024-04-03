async function fetchData() {
    const response = await fetch("https://openlibrary.org/search.json?q=${}");
    const books = await response.json();
    console.log(books);
}
