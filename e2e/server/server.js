const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const Port = 3500;

const app = express();

app.use(bodyparser.json());


app.use(cors());

app.get('/', function(req, res){
    res.send('Hello from Server');
})

app.post('/form', function(req, res){
    console.log(req.body);
    res.status(200).send({"message": "Data received"})
})

app.listen(Port, function(req, res){
    console.log('Hello from Server: ' + Port)
})