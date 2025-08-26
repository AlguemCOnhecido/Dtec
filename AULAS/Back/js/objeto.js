const nome1 = "creitin";
const sobrenome1 = "limao"
const idade1 = 19

//CRIAÇÃO DE OBJETOS
const pessoa1 = {
    nome1: "creitin",
    sobrenome1: "limao",
    idade1: 19,

}

//ACESSAR ATRIBUTOS DE UM OBJETO
console.log(pessoa1.nome1)
console.log(pessoa1.sobrenome1)
console.log(pessoa1.idade1)

//FUNÇÃO FABRICA

function criarPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
    }
}

//ULTILIZANDO FUNCAO DE FABRICA
const pessoa2 = criarPessoa("jonas", "antonele", 76)
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade)

//CRIACAO DE METODOS

function criarCachorro(nome, sono, fome){
    return{
        nome,
        sono,
        fome,

        latir(){
            console.log("Au AU")
        },

        dormir(){
            if(sono){
                sono = false
            }
        }
    }
}
const cachorro1 = criarCachorro("rex",true,10)
cachorro1.latir()

