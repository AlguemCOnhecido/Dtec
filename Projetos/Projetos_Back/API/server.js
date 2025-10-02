//Carregar variaveis de ambiente
require('dotenv').config()

const mongoose = require('mongoose')
//importando o express
const express = require('express')

//Importação cors
const cors = require("cors")
//criar meu aplicado

const PORT = process.env.PORT || 3005;
const mongoURI = process.env.mongo_URI; 
const app = express()

//CONEXÃO MONGODB

mongoose.connect(mongoURI)
    .then(() => console.log('Conectado ao MongoDB Atlas'))
    .catch(error =>{
        console.error('Falha na Conexão do MongoDb',error.message);
        process.exit(1);
    })

//ESTRUTURA DO DOCUMENTO ESQUEMA
const UsuarioSchema = new mongoose.Schema(
    {
        nome: {type: String, required: true},
        idade: {type: Number, required: true}
    },
    {timestamps: true}
);

//Modelo de Collection
const Usuario = mongoose.model('Usuario',UsuarioSchema);

//app ter acesso ao json 
app.use(express.json())

//Permitir trabalhar com cors 
app.use(cors())


app.get('/', (req,res) => {
    res.send("Pagina Incial")
})

app.get('/usuarios/:id',async (req,res) =>{
    try{
        const id = req.params.id;
        const usuarios = await Usuario.findById(id);

        if(usuario){
            res.json(usuario)
        }else{
            res.status(404).json({mensagem: 'Usuario Não encontrado'})
        }
    } catch (erro){
        res.status(400).json({mensagem: 'Erro de Servidor', erro: error.message})
    }
})

app.get('/usuarios',async(req,res) => {
    try {
        const usuarios = await Usuario.find({});
        res.json(usuarios)
    }catch(error){
        res.status(500).json({mensagem: 'Erro ao Buscar Usarios', erro: error.message})
    }
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
