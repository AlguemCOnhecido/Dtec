/* ´JSON É UMA FORMA DE MANIPULAR DADOS*/

const listadecompras = {
    "nome": "Lista de compras",
    "data": "20/04/07",
    "itens": [
        {"item": "maça",
        "quantidade": 5
        },
        {"item": "pao",
        "quantidade": 2
        }
    ]
}
// criar um objeto perfil do usuario com nome, idade, hobbie para cada dia da semana

const usuario ={
    "nome": "robson",
    "email": "robsonjoares@gmail.com.br",
    "hobbies":[
        {"dia": "segunda", "futebol":
        "1:30 min diarios"},

        {"dia": "terça", "lutar com um urso polar": 
        "viajar para a russia para lutar por 30min"},

        {"dia": "quarta", "chutar mendigo na rua":
        "chutar a bacia de mendigo por 30min"},

        {"dia": "quinta", "ver o francisco tentar matar o ben-hur":
        "30min"},

        {"dia": "sexta", "casos criminais no youtube":
        "possivelmente ficar irritado com a burrice dos criminosos"},

        {"dia": "sabado", "ser feliz": "ver series no celular"},

        {"dia": "domingo", "ser triste":
        "chorar em posição fetal lateral embaixo de um choveiro de agua fria as 00:39 ouvindo taylor swift ou judas da lady gaga"}
    ]
}

const catalogo ={
    "Livros":[
        {"Autor": "Creitin", "Titulo": "A chuva do bom dia", "publicação": "1929", "disponivel": false },
        {"Autor": "Joseph", "Titulo": "A arte da malandragem em NewYork", "publicação": "1939", "disponivel": true},
        {"Autor": "Jotaro", "Titulo": "A arte de impor respeito aos seus familiares", "publicação": "2001", "disponivel": true}
    ]
}

/* HTTP e HTTPS
GET- Receber informação
POST- Postam informações
PUT- Atualizar a informação
DELETE- Deletar informações
*/