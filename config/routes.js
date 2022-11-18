const express = require ('express')
const routes = express.Router() // por padrão pular duas linhas sempre após importar bibliotecas


routes.get('/',(req,res) =>{
    res.render('index')
})
routes.get('/about',(req,res) =>{
    res.render('about')
})

module.exports = routes