const num = 9.4
const num2 = 2.2
const num3 = 1.3

//Arredondamento para baixo
let resultado = Math.floor(num)
console.log(resultado)

//Arredondamento para cima
let resultado2 = Math.ceil(num2)
console.log(resultado2)

//Arredonda automaticamente sem justificar
//Arredondamento padrao >= 5 arredonda para cima <5 arredonda para baixo
let resultado3 = Math.round(num3)
console.log(resultado3)

const resultadof = resultado2 + resultado3
console.log(resultadof)
//////////////////////////////////////////
//Encontra o maior numero
let maior = Math.max(1,2,3,45,65,78,2)
console.log(maior)
//Encontra o menor numero
let menor = Math.min(23,232,-1,12)
console.log(menor)

//Numero aleeatorio
let aleeatorio = Math.random()
console.log(Math.round(aleeatorio))

//numero aletorio entre intervalos 
let min = 5;
let max = 10;
let aleatorioa = Math.random() * (max - min) + min;
console.log(aleatorioa.toFixed(0))


