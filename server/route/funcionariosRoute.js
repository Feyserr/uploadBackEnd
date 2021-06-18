const express = require('express');
const router = express.Router();
const funcionariosService = require('../service/funcionariosService');


//rotas dos métodos 

router.get('/funcionarios', async function(req, res){
    const funcionarios = await funcionariosService.getFuncionarios();
    res.json(funcionarios);
});
router.get('/funcionarios/:id', async function(req, res){
    const funcionariosId = await funcionariosService.getFuncionariosId(req, res);
    res.json(funcionariosId);
});
router.post('/novoFuncionarios', async function(req, res){
    const novoFuncionario = await funcionariosService.novoFuncionarios(req, res);
    res.json(novoFuncionario);
});
router.put('/funcionarios/:id', async function(req, res){
    const editarFuncionario = await funcionariosService.editarFuncionariosId(req, res);
    res.json(editarFuncionario);
});
router.delete('/funcionarios', async function(req, res){
    const deleteFuncionarios = await funcionariosService.deleteFuncionarios(req, res);
    res.json(deleteFuncionarios);
})


module.exports = router;