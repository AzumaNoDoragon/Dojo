const express = require('express')
const operacoes = express()

const methodError = (req, res) => res.status(404).json({erro: "Método não permitido"})

operacoes.get("/", (req, res) => {res.send(`Você está na Home!`)})

operacoes.route("/adicao")
    .get((req, res) => { res.send(`Você está na rota adicao`) })
    .post((req, res) => res.json({ resultado: req.body.a + req.body.b }))
    .all(methodError)

operacoes.route("/subtracao")
    .get((req, res) => res.send(`Você está na rota subtracao`))
    .post((req, res) => res.json({ resultado: req.body.a + req.body.b }))
    .all(methodError)

operacoes.route("/multiplicacao")
    .get((req, res) => { res.send(`Você está na rota multiplicacao`) })
    .post((req, res) => res.json({ resultado: req.body.a * req.body.b }))
    .all(methodError)

operacoes.route("/divisao")
    .get((req, res) => { res.send(`Você está na rota divisao`) })
    .post((req, res) => {
    if (req.body.b === 0) {
        return res.status(400).json({
            erro: "Divisão por zero!"
        })
    }

    res.json({
        resultado: req.body.a / req.body.b
    })
})

operacoes.post

module.exports = operacoes;