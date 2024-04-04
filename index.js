async function fetchData() {
    const response = await fetch("https://www.dnd5eapi.co/api/${}");
    const data = await response.json();
    console.log(data);
}
