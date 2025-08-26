/*&& and
|| or
! not
*/

//operador and(&&) sera true se todas as condições forem "true"
const temDinheiro = false;
const estaSol = true;
const tempo = false;

const vouSair = temDinheiro && estaSol && tempo;
console.log(vouSair)

// operador or(||) sera true se apenas uma das condições forem "true"

const ficarEmCasa = temDinheiro || estaSol;
console.log(ficarEmCasa)

//operador not(!)

const estaChovendo = false;
console.log(!estaChovendo)
/* 
"texto" = true truthy
"" = false falsy
0 = false salsy
123 (numero acima de 0) = true truthy
undedined = salse falsy
*/

//DUPLA NEGAÇÃO (!!) - conversao de dados para booleanos
console.log(!!"aohwahwbdhbwkja") //strings nao vazias retornam true
console.log(!!"") //strings vazias retornam o valor false
console.log(!!0) // numero 0 retorna o valor false
console.log(!!123) //numeros != de zero retornam true  
console.log(!!undefined) // undefined retorna false

//EXEMPLO DE ULTILIZAÇÃO DUPLA NEGAÇÃO
const email = "";
if(!!email){
    console.log("email preenchido")
}else{
    console.log("campo de email vazio")
};

//PRIORIDADES DE OPERADORES

const resultado = true || false && false
console.log(resultado) //true

const resul2 = (true || false) && false
console.log(resul2) //false


const resul3 = !true && false || false && (!false || !true) && false
console.log(resul3) //false


//EXEMPLO PRATICO LOGIN E SENHA

const usuario = "abc"
const senha = "1234"

const usuarioDigitado = "abc"
const senhaDigitadaa = "1234"

const logado = usuarioDigitado === usuario && senhaDigitadaa === senha;
console.log(logado) //true

//operador ternario

const pontos = 999

if(pontos <1000){
    console.log("usuario normal")
}else{
    console.log("usuario vip")
}
// condição ? valor se verdadeiro : valor se falso 
const Usuario2 = pontos <1000 ? "usuario Normal": "usuario vip";
console.log(Usuario2) //"usuario normal"

// AVALIAÇÃO CURTO CIRCUITO
//o operador logico ||(ou) pode ser usado para definir
// valores padrao quando uma variavel é nula, indefinida ou falsy
const corUsuario = null;
const corPadrao = corUsuario || "verde"
console.log(corPadrao)


