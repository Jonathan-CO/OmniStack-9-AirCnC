const express  = require('express');

const app=express();

app.get('/', (req, res) =>{
    //req representa a requisição (dados da req)
    //res representa a resposta (devolução à req)

    return res.json({ message: "Iniciando a Vida React"});

});
app.listen(3333);