let url = "https://pokeapi.co/api/v2/pokemon/chimchar";
let fluidContainer = document.getElementsByClassName("container-fluid")[0];
function getTypes(pokemonJSON) {
    let types = [];
    for(let type of pokemonJSON.types){
        types.push(type.type.name)
    }
    return types;
}

function getMoves(pokemonJSON) {
    let moves = [];
    for(let move of pokemonJSON.moves) {
        moves.push(move.move.name)
    } 
    return moves;
}

function getAbilities(pokemonJSON) {
    let abilities = [];
    for(let ability of pokemonJSON.abilities){
        abilities.push(ability.ability.name);
    }
    return abilities
}


function createPokemonElement (pokemon){
    //h1 tag for name
    let h1 = document.createElement("h1");
    h1.innerText = pokemon.name;
    //h2 tag for numbers
    let h2 = document.createElement("h2")
    h2.innerText = pokemon.number;
    //p tag for types
    let p = document.createElement("p");
    for(let type of pokemon.types) {
        p.innerText += `${type}`
    }
    //ul tag for moves
    let moveUL = document.createElement("ul");
    for(let move of pokemon.moves) {
        moveUL.innerHTML += `<li>${move}</li>`;
    }
    //ul tag for abililties 
    let abilityUL = document.createElement("ul");
    for(let ability of pokemon.abilites) {
        abilityUL.innerHTML += `<li>${ability}</li>`;
    }
    //img tag
    let img = document.createElement("img")
    img.src = pokemon.sprites
    //div container for our pokemon element
    let div = document.createElement("div");
    div.append(img, h1, h2, p, moveUL, abilityUL);
    fluidContainer.appendChild(div);
}





fetch(url)
.then((response) => response.json())
.then(function(data){
    console.log(data);
    let name = data.name;
    let number = data.id;
    let types = getTypes(data);
    let moves = getMoves(data);
    let abilities = getAbilities(data);
    let sprites = data.sprites.front_default
    let chimchar = new Pokemon(name, number, types, moves, abilities, sprites);
    console.log(chimchar);
    createPokemonElement(chimchar)
})

.catch(function(error){
    console.log(error);
});