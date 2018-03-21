var express = require('express')
var routing = express()
routing.get('/',function(req,res){
    res.send(__dirname+"/"+"login.vue")
})

/* routing.get('/home',function(req,res){
    res.send("<h1>Welcom to home</h1>")
}) */

routing.listen(3000)
