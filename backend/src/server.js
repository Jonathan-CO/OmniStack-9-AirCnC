const express  = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app=express();

mongoose.connect('mongodb+srv://omnistack-9:omnistack-9@omnistack-9-sgqrz.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    //req representa a requisição (dados da req)
    //res representa a resposta (devolução à req)
    //req.query = acessar params (filtros)
    //req.params = acessar route params (edição, delete)
    //req.body = acessar corpo da requisição (criação e edição)


app.use(express.json());
app.use(routes);


app.listen(3333);