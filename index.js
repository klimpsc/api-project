
async function fetchMonsters(){
    const res = await fetch("https://www.dnd5eapi.co/api/monsters")
    const {results} = await res.json()

    renderMonster(results)
}



function renderMonster(monsters) {
    monsters.forEach(({ name }) => {
        const container = document.querySelector('.container')
        const card = addCard(name)
        container.append(card)
    })
}

function addCard(monstersName) {
    const cardDiv = document.createElement('div')
    cardDiv.textContent = monstersName
    return cardDiv
}
fetchMonsters()


