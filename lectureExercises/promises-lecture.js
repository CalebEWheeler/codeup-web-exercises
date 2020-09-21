let starFetch = fetch('https://swapi.dev/api/people/9/')
    .then(result => result.json())
    .then(data => {
        console.log(data)
        return "Star Wars Finished"
    })

let pokeInfo = fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(result => {
        // console.log(result)
        return result.json()
    })
    .then(data => {
        console.log(data)
        return "Pokemon Finished"
    })
    .catch(error => console.error(error)) //error not passing??

Promise.all(([pokeInfo, starFetch]))
    .then(data => {
        console.log('Both are complete!')
        console.log(data);
    })