var express = require('express');
var app = express();
const User= require("./connection_to_db.js")
const path = require('path')

const base_folder = path.resolve(__dirname, '..')

app.use(express.static(base_folder+'\\front-end\\public'))

app.get('/', function (req, res) {
   res.sendFile(base_folder+'\\front-end\\index.html');
})

app.get('/getData',function(req,res){
    User.find({},function(err,docs){
        if(docs){
            res.send(docs[0]['value'])
        }
    })
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

})