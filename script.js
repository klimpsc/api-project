


async function fetchData() {
    const response = await fetch('https://www.dnd5eapi.co/api/monsters');
    const {results} = await response.json();
    console.log(results[6])
    document.getElementById('template').
    innerHTML=results[6]

}
fetchData()




///////////
// async function fetchMonsters(){
//     const res = await fetch("https://www.dnd5eapi.co/api/monsters")
//     const { results } = await res.json()

//     results.forEach(({ url }) => fetchMonstersDetails(url))
        
//     }

// async function fetchMonstersDetails(url) {
//     const res = await fetch(url)
//     const pokemonData = await res.json()
//     if(!currentMonsters[monsters.name])
//         currentMonsters[monsters.name] = monstersData
//     if(!currentMonsters[monsters.image])
//         currentMonsters[monsters.image] = monsterData

//     renderMonsters(monstersData)
// }

// function renderMonsters(monsters) {
//     const container = document.querySelector('.container')
//     const card = generateCard(monsters)
//     container.append(card)
// }

// function generateCard(monsters) {
//     const cardDiv = document.createElement('div')
//     const image = document.createElement('img')
//     cardDiv.className = 'card'
//     image.src = monsters.image
//     image.alt = monsters.name
//     const title = document.createElement('h2')
//     title.textContent = monsters.name
//     cardDiv.append(image, title)

//     return cardDiv 
// }


// fetchMonsters()
