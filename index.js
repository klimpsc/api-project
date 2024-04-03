async function fetchData(){

    try{
        const bookName = document.getElementById("bookName").value.toLowerCase();
        const response = await fetch('https://openlibrary.org/search.json?q=${}')

    }
}
fetchData()