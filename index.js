let rules_url = "https://www.dnd5eapi.co/api/rules"
let races_url = "https://www.dnd5eapi.co/api/races"
let classes_url = "https://www.dnd5eapi.co/api/classes"
let monsters_url = "https://www.dnd5eapi.co/api/monsters"
let spells_url = "https://www.dnd5eapi.co/api/spells"
let features_url = "https://www.dnd5eapi.co/api/features"


async function monstersData() {
    const response = await fetch(monsters_url);
    const data = await response.json();
    console.log(data.results);
}
