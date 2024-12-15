const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-button")
const pokemonName = document.getElementById("pokemon-name")
const pokemonId = document.getElementById("pokemon-id")
const pokemonWeight = document.getElementById("weight")
const pokemonHight = document.getElementById("height")
const pokemonTypes = document.getElementById("types")
const hp = document.getElementById("hp")
const attack = document.getElementById("attack")
const defense = document.getElementById("defense")
const secialAttack = document.getElementById("special-attack")
const sepcialDefence = document.getElementById("special-defense")
const speed = document.getElementById("speed")
const spriteContainer = document.getElementById("sprite-container")

const getPokemon = async ()=>{
  const pokemonNameOrId = searchInput.value.toLowerCase()
  try{
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`)
    const data = await res.json()
    setPokemonInfo(data)
  } catch (err){
    alert('Pokemon not found')
    clearScreen()
    console.log(err)
  }
}

const setPokemonInfo = data =>{
  const {name,id,weight, height, types,sprites,stats} = data
  pokemonName.textContent = `${name[0].toUpperCase() + name.slice(1)}`
  pokemonId.textContent = `#${id}`
  pokemonWeight.textContent = `Weight: ${weight}`
  pokemonHight.textContent = `Height: ${height}`
  

  spriteContainer.innerHTML = `<img id="sprite" src="${sprites.front_default}" alt="${name} front default sprite">`
  hp.textContent = stats[0].base_stat
  attack.textContent = stats[1].base_stat
  defense.textContent = stats[2].base_stat
  secialAttack.textContent = stats[3].base_stat
  sepcialDefence.textContent = stats[4].base_stat
  speed.textContent = stats[5].base_stat


  pokemonTypes.innerHTML = types.map(obj => `<span class="types ${obj.type.name}">${obj.type.name[0] }<span>`).join(" ")
}

searchButton.addEventListener('click',e => {
  e.preventDefault()
  
getPokemon()
})

searchInput.addEventListener('keydown',(e)=>{
  if(e.key === "Enter"){
    searchButton.click()
  }
})

const clearScreen = () =>{
  const sprite = document.getElementById('sprite');
  if (sprite) sprite.remove();
  
  pokemonName.textContent = ''
  pokemonId.textContent = ''
  pokemonWeight.textContent = ''
  pokemonHight.textContent = ''
  

  spriteContainer.innerHTML =''
  hp.textContent = ''
  attack.textContent = ''
  defense.textContent = ''
  secialAttack.textContent = ''
  sepcialDefence.textContent = ''
  speed.textContent = ''

  pokemonTypes.innerHTML =''
}