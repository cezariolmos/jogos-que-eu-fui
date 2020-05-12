// JSON Projetos de jogos de futebol que eu fui! 
const express = require('express');

const server = express();

server.use(express.json());

const jogos = [
    { nome: 'Corinthians vs São Paulo', ano: 2019},
    { nome: 'Corinthians vs Vasco', ano: 2017} 
]

server.get('/jogo', function(request, response) {
    response.json(jogos);
})

server.post('/jogo', function(request, response) {

    // const nome = request.body.nome;
    // const ano = request.body.ano;

    const {nome, ano} = request.body;

    jogos.push({nome, ano});
    response.status(204).send();
})

server.put('/jogo/:id', function(request, response) { 
    const id = request.params.id;
    const {nome, ano} = request.body;

    for(let i = 0; i < jogos.length; i++) {
        if(jogos[i].nome == id) {
            jogos[i].nome = nome;
            jogos[i].ano = ano;
            break;
        }
    }

    return response.status(204).send();
})

server.delete('/jogo/:id', function(request, response) {

    const id = request.params.id;

    for(let i = 0; i < jogos.length; i++) {
        if(jogos[i].nome == id) {
            jogos.splice(i, 1);
            break;
        }
    }

    return response.status(204).send();
})

server.listen(process.env.PORT || 3000);
