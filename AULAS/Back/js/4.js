
fetch('https://pokeapi.co/api/v2/pokemon/25')
.then(response => {
    return response.json()
})
.then(data =>{
    console.log(data)
    console.log(data.height)
    console.log(data.name)
    console.log(data.weight)

const pokemoNome = data.name
const nome = document.querySelector(".nome")
nome.innerHTML +=`${pokemoNome}`

const pokemonPeso = data.height
const altura = document.querySelector(".altura")
nome.innerHTML +=`${pokemonAltura}`

const pokemonAltura = data.weight
const peso = document.querySelector(".peso")
nome.innerHTML +=`${pokemonAltura}`
})