const idade1= Number(prompt('Digite sua idade:'));
const idade = document.getElementById('idade1');


if(idade <=0 && idade >=12){
    idadeTitulo.innerHTML =("Criança")
}else if(idade <= 13 && idade >=17){
    numeroTitulo.innerHTML =("Adolescente")
}else if(idade <=18 && idade >=59 ){
    numeroTitulo.innerHTML =("Adulto")
}else{
    numeroTitulo.innerHTML =("Idoso")
}

