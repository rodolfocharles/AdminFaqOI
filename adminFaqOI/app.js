var express = require('express');
var app = express();

/* Recuperar a home passando função por parametro */
app.get('/', function(req, res){

    res.send("<html><body>Admin FAQ OI</body></html>");
})

/* Metodo que vai escutar a requisição na porta 3000 */
app.listen(3000, function(){
    console.log("Servidor rodando com express");
});
