
async function fetchPokemon() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    const { results } = await res.json()
    renderPokemon(results)
}
function renderPokemon(pokemon) {
    pokemon.forEach(({ name }) =>{
        const container = document.querySelector('.container')
        const card = generateCard(name)
        container.append(card)
    })
}
function generateCard(name){
    const cardDiv = document.createElement('div')
    cardDiv.textContent = name

    return cardDiv
}

fetchPokemon()