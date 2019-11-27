const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const cadastrarAluno = require('../models/cadastrarAlunoSchema');

router.get('/:produtoId', (req, res, next) => {
    const id = req.params.produtoId;
    Produto.findById(id)
        .exec()
        .then(cadastrarAluno => {
            res.status(200).json({
                cadastrarAluno
            });

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                err
            });
        })

});
router.get('/', (req, res, next) => {
    const cadastrarAluno = {};
    Produto.find({})
        .exec()
        .then(cadastrarAluno => {
            res.status(200).json({
                cadastrarAluno
            });

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                err
            });
        })

});


router.post('/', (req, res, next) => {
    console.log(req.file);

    const produto = new Produto({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        preco: req.body.preco,
        produtoImage: req.file.path
    });
    //promise

    CadastrarAluno.save()
        .then(result => {
            res.status(200).json({
                message: ' POST /',
                alunoAdicionado: aluno
            });
        })
        .catch(err => {
            res.status(500).json({
                err
            });
        });

});
router.put('/:produtoId', (req, res, next) => {
    const id = req.params.produtoId;
    console.log(req.body);

    Produto.updateOne({ _id: id }, { $set: { nome: req.body.nome, preco: req.body.preco } })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({
                err
            });
        });

});
router.delete('/:produtoId', (req, res, next) => {
    const id = req.params.produtoId;

    Produto.remove({ _id: id })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({
                err
            });
        });

});


module.exports = router;