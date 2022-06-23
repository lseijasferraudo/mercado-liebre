const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, './public');

app.use( express.static(publicPath) );

app.listen(3000, () => {
    console.log("servidor funcionando en puerto 3000")
});


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, './view/home.html'));
});