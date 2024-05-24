
async function fetchPokemon() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
    const { results } = await res.json()
    
    results.forEach(({ url }) => fetchPokemonDetails(url))
}

async function fetchPokemonDetails(url) {
    const res = await fetch(url)
    const pokemonData = await res.json()

    renderPokemon(pokemonData)
}


function renderPokemon(pokemon) {
    const container = document.querySelector('.container')
    const card = generateCard(pokemon)
    container.append(card)
    
}

function generateCard(pokemon){
    const cardDiv = document.createElement('div')
    const image = document.createElement('img')
    cardDiv.className = 'cards'
    image.src = pokemon.sprites.other.dream_world.front_default
    image.alt = pokemon.name
    const title = document.createElement('h2')
    title.textContent = pokemon.name
    cardDiv.append( title, image)
    return cardDiv
}

fetchPokemon()