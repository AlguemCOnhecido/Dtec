// ---->FUNÇÕES DECLARADAS<---- 

//criação da função
function saudação(){
    console.log('bom dia!')
}
//executa a função
saudação();

function soma(a,b){
    return a + b;
}
console.log(soma(8,2))

//função com parâmetro padrão
function comapadrao(x = 1, y = 1){
    return x + y
}
console.log(comapadrao()) // retornara 2
console.log(comapadrao(5)) // substitui o valor do x pelo novo numero e soma ent vira 6
console.log(comapadrao(5,5)) //retornara 10 porque substitui os 2 valores iniciais 

// ----> FUNÇÕES ANONIMAS <----

const raiz = function(n){
    return n ** 0.5
}
console.log(raiz(7))

// ----> ARROW FUNCTION <----

const sqrt = (n)  => n ** 0.5;
console.log(sqrt(8))