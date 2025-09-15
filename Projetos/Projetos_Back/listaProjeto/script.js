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
    const cidade = paisInput.value.trim();

    if(cidade === ""){
        alert('Por Favor, Digite um Pais')
        return;
    }

    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(cidade)}&format=jsonv2`

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
        const name = pais.display_name;

        const url2 = `https://api.open-meteo.com/v1/forecast?latitude=${pais.lat}.52&longitude=${pais.lon}.41&current=is_day,temperature_2m`
    fetch(url2)
        .then(response => {
            if(!response.ok){
                throw new Error("Localidade Indisponivel...")
            };
        return response.json();
    })
        .then(data => {
            const clima = data
            const temperatura = clima.current.temperature_2m
            const dia = clima.current.is_day

        })
        

        container.innerHTML = `
        <h2 placeholder="--C°">${temperatura}</h2>
        `

        paisInput.value = "";
    })
    .catch(error => {
        console.error(error)
        container.innerHTML = `<p style="color: red;">Erro: ${error.message}</p>`
        paisInput.value = "";
    })
})
