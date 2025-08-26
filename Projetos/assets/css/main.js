const form = document.querySelector('#formulario');
console.log(form)
const resultado = document.querySelector('.resultado')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const peso = form.querySelector(".peso").value
    const altura = form.querySelector(".altura").value
    const imc = peso/(altura * altura);

    if(peso === "" || peso === undefined || peso ==0 ){
    resultado.innerHTML = `<p class= "bad"> valor invalido</p>`
}
else if(altura === "" || altura === undefined || peso ==0){
    resultado.innerHTML = `<p class= "bad"> valor invalido</p>`
}
else{

        if(imc <= 18.5){
            resultado.innerHTML += `<p> Seu IMC é ${imc} (Abaixo do Peso).</p>`
        }
        else if (imc >= 18.5 && imc <= 24.9){
            resultado.innerHTML += `<p> Seu IMC é ${imc} (Peso normal).</p>`
        }
        else if(imc >= 25.0 && imc <= 29.9){
            resultado.innerHTML += `<p> Seu IMC é ${imc} (Sobrepeso).</p>`
        }
        else if (imc >=30.0 && imc >= 34.9){
            resultado.innerHTML += `<p> Seu IMC é ${imc} (Obesidade grau 1).</p>`
        }
        else if (imc >= 35.0 && imc >= 39.9){
            resultado.innerHTML += `<p> Seu IMC é ${imc} (Obesidade grau 2).</p>`
        } 
        else if ( imc >40.0 ){
            resultado.innerHTML += `<p> Seu IMC é ${imc} (Obesidade grau 3).</p>`
        }
        else{
            resultado.innerHTML += `<p> valor invalido</p>`
        }
    }
})
;