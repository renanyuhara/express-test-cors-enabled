var express = require('express');
var app = express();

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/api/post/:id', function(req,res) {
    var id = req.params.id;
    res.status(id).json({'sucesso': true});
});

app.put('/api/put/:id', function(req,res) {
    var id = req.params.id;
    res.status(id).json({'sucesso': true});
});

var porta = 3033;

app.listen(porta);
console.log('Rodando na porta ' + porta);