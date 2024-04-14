
async function fetchData(){
    try {
        const response = await fetch ("https://www.dnd5eapi.co/api/races");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('ERROR!! ERROR!!', error);
    }
} 