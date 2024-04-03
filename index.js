async function fetchBook(){
    const response = await 
fetch('https://openlibrary.org/search.json?q=the+lord+of+the+rings');
    const search = await response.json();
    console.log(search);
}
fetchBook()