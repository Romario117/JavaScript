const client = fetch('https://pokeapi.co/api/v2/pokemon/1');

// client.then((res) => {
//     res.json().then(data => {
//         console.log(data)
//     })
// }).catch(console.error)

client.then(response => response.json())
    .then(data => console.log(data))