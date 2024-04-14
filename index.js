let races_api_url = "https://www.dnd5eapi.co/api/races"
let classes_api_url = "https://www.dnd5eapi.co/api/classes"
let monsters_api_url = "https://www.dnd5eapi.co/api/monsters"
let spells_api_url = "https://www.dnd5eapi.co/api/spells"
let features_api_url = "https://www.dnd5eapi.co/api/features"

async function racesData() {
    const response = await fetch(races_api_url);
    const data = await response.json();
    console.log(data.results);
}

async function classesData() {
    const response = await fetch(classes_api_url);
    const data = await response.json();
    console.log(data.results);
}

async function monsterData() {
    const response = await fetch(monsters_api_url);
    const data = await response.json();
    console.log(data.results);
}

async function spellsData() {
    const response = await fetch(spells_api_url);
    const data = await response.json();
    console.log(data.results);
}

async function featuresData() {
    const response = await fetch(features_api_url);
    const data = await response.json();
    console.log(data.results);
}