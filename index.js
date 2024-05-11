
async function fetchMonsters(){
    const res = await fetch("https://www.dnd5eapi.co/api/monsters/results")
    const { results } = await res.json()

    results.forEach(({ url }) => fetchMonstersDetails(url))
        
    }

async function fetchMonstersDetails(url) {
    const res = await fetch(url)
    const monstersData = await res.json()

    renderMonsters(monstersData)
}

function renderMonsters(monsters) {
    const container = document.querySelector('.container')
    const card = generateCard(monsters)
    container.append(card)
}

function generateCard(monsters) {
    const cardDiv = document.createElement('div')
    const image = document.createElement('img')
    cardDiv.className = 'cards'
    image.src = monsters.image 
    image.alt = monsters.name
    const title = document.createElement('h2')
    title.textContent = monsters.name
    cardDiv.append(title, image)

    return cardDiv 
}
fetchMonsters()
