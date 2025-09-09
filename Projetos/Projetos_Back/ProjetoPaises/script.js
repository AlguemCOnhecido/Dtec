//Referenciar os elementos no HTML
const paisInput = document.getElementById('paisInput');
const buscarBnt = document.getElementById('buscarBtn');
const container = document.getElementById('container');

//URL Base da api

document.addEventListener('keydown',(event) =>{
    if(event.key === 'Enter'){
        event.preventDefault()
        buscarBnt.click()
    }
})

buscarBnt.addEventListener('click', () => {
    const namePais = paisInput.value.trim();

    if(namePais === ""){
        alert('Por Favor, Digite um Pais')
        return;
    }

    const url = `https://restcountries.com/v3.1/translation/${namePais}`

    container.innerHTML = "<p> Buscando...</p>"; 

    fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error("Pais não encontrado")
        };
        return response.json();
    })
    .then(data => {
        const pais = data[0]
        const moeda = Object.values(pais.currencies)[0].name;
        
        container.innerHTML = `
            <h2>${pais.translations.por.common}</h2>
            <img src="${pais.flags.svg}" alt="bandeira ${pais.name.common}" width="150">
            <p><strong>Capital</strong> ${pais.capital[0]}</p>
            <p><strong>População</strong> ${pais.population.toLocaleString()}</p>
            <p><strong>Região</strong> ${pais.region}</p>
            <p><strong>Moeda</strong> ${moeda}</p>
        `

        paisInput.value = "";
    })
    .catch(error => {
        console.error(error)
        container.innerHTML = `<p style="color: red;">Erro: ${error.message}</p>`
        paisInput.value = "";
    })
})

















/*
fetch("https://restcountries.com/v3.1/name/Brazil")
.then(response =>{
    return response.json();
})
.then(data =>{
    const pais = data[0]
})
*/
