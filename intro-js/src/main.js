const findPokemon = async (id) => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+id);
    const data = await response.json();
    
    const label =  document.createElement('p');
    label.innerText = data.name;
    
    document.getElementById('root').append(label)
}

await findPokemon(22);