// detructuracion de objetos e
const user = {
    username: 'Felipe',
    email: 'felipe@gmail.com',
    age: 20,
    ranking: 3
}

const detail = ({ username , age} ) => {
    console.log(`nombre del usuario ${username}`);
}

detail(user)
