let races_url = "https://www.dnd5eapi.co/api/races"
let classes_url = "https://www.dnd5eapi.co/api/classes"
let monsters_url = "https://www.dnd5eapi.co/api/monsters"
let spells_url = "https://www.dnd5eapi.co/api/spells"
let features_url = "https://www.dnd5eapi.co/api/features"

async function racesData() {
    const response = await fetch(races_url);
    const data = await response.json();
    console.log(data.results);
}
async function classesData() {
    const response = await fetch(classes_url);
    const data = await response.json();
    console.log(data.results);
}
async function spellsData() {
    const response = await fetch(spells_url);
    const data = await response.json();
    console.log(data.results);
}
async function monstersData() {
    const response = await fetch(monsters_url);
    const data = await response.json();
    console.log(data.results);
}
async function featuresData() {
    const response = await fetch(features_url);
    const data = await response.json();
    console.log(data.results);
}