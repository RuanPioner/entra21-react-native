const express = require('express')
var router = express.Router()
const pg = require('pg')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })

router.post('/cadastrar', (req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            return res.status(401).send({
                message: 'conexão não autorizada'
            })
        }
        bcrypt.hash(req.body.senha, 10, (erro, hash) => {
            var sql = 'insert into usuarios(nome,email,senha,perfil)values($1,$2,$3,$4)'
            var dados = [req.body.nome, req.body.email, hash, req.body.perfil]
            client.query(sql, dados, (erro, result) => {
                if (erro) {
                    return res.send({
                        message: 'Não foi posivel cadastrar o usuario',
                        erro: erro.message
                    })
                }
                if (result) {
                    return res.status(201).send({
                        message: 'usuario cadastrado com sucesso'
                    })
                }
            })
            release()
        })
    })
})

router.post('/login', (req, res) => {
    pool.connect((err, client, release) => {
        var sql = 'select * from usuarios where email = $1'
        var dados = [req.body.email]
        client.query(sql, dados, (erro, result) => {
            if (result.rowCount > 0) {
                bcrypt.compare(req.body.senha, result.rows[0].senha, (err, results) => {
                    if (results) {
                        var token = jwt.sign({
                            nome: result.rows[0].nome,
                            email: result.rows[0].email,
                            perfil: result.rows[0].perfil
                        }, process.env.JWT_KEY)
                        return res.send({
                            token: token
                        })
                    }
                    else {
                        return res.status(403).send({
                            message: 'senha não confere'
                        })
                    }
                })
            }
            else {
                return res.send({
                    message: 'usuario não encontrado'
                })
            }
        })

    })
})

module.exports = router
