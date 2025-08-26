//criar um programa que exibe um cumprimento de acordo com o horario do dia
//entre 0h e 11h -> bom dia
//entre 12h e e 17h-> boa tarde
// entre 18h e 23h -> boa noite
//mensagem padrao -> horario invalido

const hora = 12

if(hora >=0 && hora <=11){
    console.log("bom dia")
}else if(hora >=12 && hora <=17){
    console.log("boa tarde")
}else if(hora >= 18 && hora <=23){
    console.log("boa noite")
}else{
    console.log("hora invalida")
}