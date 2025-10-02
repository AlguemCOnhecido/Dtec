//importando o express
const express = require('express')

//Importação cors
const cors = require("cors")
//criar meu aplicado
const app = express()

//app ter acesso ao json 
app.use(express.json())

//Permitir trabalhar com cors 
app.use(cors())

//porta para api
const PORT = 3000;

//lista de usuarios
let usuarios = [
    {id: 1, nome: 'Clara', idade: 25},
    {id: 2, nome: 'Carlos', idade: 30},
    {id: 3, nome: 'Maria', idade: 22},
    {id: 4, nome: 'Ana Clara', idade: 16},
    {id: 5, nome: 'José Carlos', idade: 85},
    {id: 6, nome: 'Maria José', idade: 45}
]


app.get('/', (req,res) => {
    res.send("Pagina Incial")
})

app.get('/usuarios/:id', (req,res) =>{
    const id = req.params.id
    const usuario = usuarios.find(u => u.id == id )


    if(usuario){
        res.json(usuario)
    }else{
        res.status(404).json({mensagem: 'Usuario não Encontrado'})
    }
})

app.get('/usuarios',(req,res) => {
    res.json(usuarios);
})

app.get('/usuarios/nome/:nome', (req,res) => {
    const buscaNome = req.params.nome.toLowerCase()
    const resultados = usuarios.filter(u => u.nome.toLowerCase().includes(buscaNome))

    if(resultados.length > 0){
        res.json(resultados)
    }else{
        res.status(404).json({mensagem: 'Usuario não Encontrado'})
    }
})
//iniciar o server

app.delete('/usuarios/:id', (req,res) => {
    const id = req.params.id
    usuarios = usuarios.filter(u => u.id != id)
    res.json({mensagem:'Usuario excluido com sucesso'})
})
app.post('/usuarios', (req,res) =>{

    const ultimoId = usuarios.reduce((max, usuarios) => Math.max(max, usuarios.id), 0)

    const novoUsu = {
        id: ultimoId +1,
        nome: req.body.nome, 
        idade: req.body.idade
    };

    usuarios.push(novoUsu)
    res.status(201).json(novoUsu)
})

app.put('/usuarios/:id', (req,res) =>{
    const id = req.params.id;
    const nome = req.body.nome;
    const idade = req.body.idade

    const usuario = usuarios.find(u => u.id == id)

    if(!usuario){
        return res.status(404).json({mensagem: "Usuario não encontardo"})
    }

    usuario.nome = nome || usuario.nome
    usuario.idade = idade || usuario.idade
    res.json(usuario)

})
app.get('/usuarios/idade/:idade', (req,res)=> {

    const idades = req.params.idade
    const usuario = usuarios.filter(u => u.idade == idades)
    
    if(usuario.length > 0){
        res.json(usuario)
    }
    else{
        res.status(404).json({mensagem: 'Usuario não Encontrado'})
    }
})
app.listen(PORT, () => {
    console.log(`Servidor na Porta ${PORT}`)
})
