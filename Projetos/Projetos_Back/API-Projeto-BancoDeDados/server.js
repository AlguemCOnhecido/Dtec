//CARREGAR VARIÁVEIS DE AMBIENTE
require('dotenv').config()

//Importando o express
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('./Models/User');
const Pessoa = require('./Models/pessoa')

//Função geradora de token de login

const PORT = process.env.PORT || 3005;
const mongoURI = process.env.MONGO_URI;
const JWT_SECRETE = process.env.JWT_SECRETE;

//CONEXÃO MONGODB
mongoose.connect(mongoURI)
    .then(() => console.log("Conectado ao MongoDb Atlas"))
    .catch(error => {
        console.error("Falha na Conexão ao MongoDB", error.message);
        process.exit(1);
    })


const generateToken = (id) => {
    return JWT.sign({ id }, JWT_SECRETE, { expiresIn: '1d' })
}

const protect = (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            JWT.verify(token, JWT_SECRETE);
            next()
        } catch (error) {
            return res.status(401).json({ mensagem: "Não Autorizado, Token invalido" })
        }
    }
}

//estrutura do documento SCHEMA 

//Modelo e Collection

//Criando minha aplicação
const app = express()

//Permitir trabalhar com json
app.use(express.json())
app.use(cors())


//ROTAS ADMIN

app.post('/API-PROJETO-BANCODEDADOS/register-admin', async (req, res) => {
    const { email, password } = req.body
    try {
        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(400).json({ mensagem: 'Nome do usuario ja existe' })
        }
        const user = await User.create({ email, password })
        res.status(201).json({ mensagem: 'Usuario criado com sucesso' })
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro no Registro adimin', erro: error.message })
    }
})

app.post('./API-PROJETO-BANCODEDADOS/login-admin', async (res, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email }.select('+password'));
        if (user && await user.matchPassword(password)) {
            res.json({
                email: user.email,
                token: generateToken(user._id),
                mensagem: 'Login Realizado com sucesso'
            })
        } else{
            res.status(401).json({mensagem: 'Credencias invalidas'})
        }
    } catch(error){
        res.status(500).json({mensagem: "Erro no login", erro: error.message})
    }
})



app.get('/', (req, res) => {
    res.send("PÁGINA INICIAL")
})


app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.find({});
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar usuários", erro: error.message })
    }
})

app.get('/usuarios/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const usuario = await Usuario.findById(id);

        if (usuario) {
            res.json(usuario)
        } else {
            res.status(404).json({ mensagem: "Usuário Não encontrado" })
        }
    } catch (error) {
        res.status(400).json({ mensagem: "Erro de Servidor", erro: error.message })
    }
})

app.get('/usuarios/nome/:nome', async (req, res) => {
    try {
        const buscaNome = req.params.nome;
        const resultados = await Usuario.find({
            nome: { $regex: buscaNome, $options: 'i' }
        });
        if (resultados.length > 0) {
            res.json(resultados);
        } else {
            res.status(404).json({ mensagem: "Usuário Não Encontrado" })
        }
    } catch (error) {
        console.error("Erro na busca", error);
        res.status(500).json({ mensagem: "Erro no servidor", erro: error.message })
    }

})

app.get('/usuarios/idade/:idade', async (req, res) => {
    try {
        const buscaIdade = req.params.idade;
        const resultados = await Usuario.find({
            idade: buscaIdade
        });
        if (resultados.length > 0) {
            res.json(resultados);
        } else {
            res.status(404).json({ mensagem: "Usuário Não Encontrado" })
        }
    } catch (error) {
        console.error("Erro na busca", error);
        res.status(500).json({ mensagem: "Erro no servidor", erro: error.message })
    }
})

app.delete('/usuarios/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const usuarioDeletado = await Usuario.findByIdAndDelete(id);

        if (!usuarioDeletado) {
            return res.status(404).json({ mensagem: "Usuário Não Encontrado" })
        }
        res.json({ mensagem: "Usuário deletado", usuario: usuarioDeletado });
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao deletar", erro: error.message })
    }
})

// A sua rota POST para criar um novo usuário
app.post('/usuarios', async (req, res) => {
    try {
        const novoUsuario = await Usuario.create({
            nome: req.body.nome,
            idade: req.body.idade
        });
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({ mensagem: "Dados Inválidos ou Erro ao salvar", erro: error.message })
    }
});

app.put('/usuarios/:id', async (req, res) => {
    try {
        const id = req.params.id
        const nome = req.body.nome
        const idade = req.body.idade
        const usuarioAtualizado = await Usuario.findByIdAndUpdate(
            id,
            { nome, idade },
            { new: true, runValidators: true }
        )
        if (!usuarioAtualizado) {
            return res.status(404).json({ mensagem: " Usuário Não Encontrado" })
        }
        res.json(usuarioAtualizado)
    } catch {
        res.status(400).json({ mensagem: "Erro ao atualizar", erro: error.message })
    }
})

//Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`)
})