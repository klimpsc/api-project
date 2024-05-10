
async function fetchMonsters(){
    const res = await fetch("https://www.dnd5eapi.co/api/monsters")
}
const result = fetchMonsters()
console.log(result)

