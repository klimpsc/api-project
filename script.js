async function fetchMonsters(){
    const res = await fetch("https://www.dnd5eapi.co/api/monsters")
    const { results } = await res.json()
    console.log(results)
    results.forEach(({ url }) => fetchMonstersDetails(url))
    }

async function fetchMonstersDetails(url) {
    const res = await fetch("https://www.dnd5eapi.co" + url)
    const monstersData = await res.json()

    renderMonsters(monstersData)
}

function renderMonsters(monsters) {
    const container = document.querySelector('.container')
    const card = generateCard(monsters)
    container.append(card)
}

function generateCard(monster) {
    const cardDiv = document.createElement('div')
    cardDiv.className = 'cards'
   
    const title = document.createElement('h2')
    title.textContent = monster.name
    cardDiv.append(title)

    if (monster.image) {
        const image = document.createElement('img')
    
        image.src = "https://www.dnd5eapi.co" + monster.image
        image.alt = "https://www.dnd5eapi.co" + monster.name
        cardDiv.append(image)
    }
    return cardDiv 
}

fetchMonsters()

