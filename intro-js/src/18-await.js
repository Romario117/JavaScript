const findPokemon = async (id) => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+id);
    const data = await response.json();
    return data;
}

const pokemon  = await findPokemon(20);
console.log(pokemon)
