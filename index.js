let api_url = "https://www.dnd5eapi.co/api/races"

async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data.results[1]);
}






async function classesData() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data.name);
    console.log(data.hit_die);
    console.log(data.proficiencies[4].name);
}

async function monsterData() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data.name);
    console.log(data.hit_die);
    console.log(data.proficiencies[4].name);
}

async function equiptmentData() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data.name);
    console.log(data.hit_die);
    console.log(data.proficiencies[4].name);
}

async function spellsData() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data.name);
    console.log(data.hit_die);
    console.log(data.proficiencies[4].name);
}