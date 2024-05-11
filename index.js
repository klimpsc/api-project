
async function fetchMonsters(){
    const res = await fetch("https://www.dnd5eapi.co/api/monsters")
    const {results} = await res.json()

    renderMonster(results)
}



function renderMonster(monsters) {
    monsters.forEach(({ name }) => console.log(name))
}


