const funcionariosData = require('../controllers/funcionariosData');

// exports pras rotas 

exports.getFuncionarios = function(){
    return funcionariosData.getFuncionarios();
}
exports.novoFuncionarios = function(req,res){
    return funcionariosData.novoFuncionarios(req, res);
}

exports.editarFuncionariosId = function(req, res){
    return funcionariosData.editarFuncionariosId(req, res);
}

exports.getFuncionariosId = function(req, res){
    return funcionariosData.getFuncionariosId(req, res);
}
exports.deleteFuncionarios = function(req,res){
    return funcionariosData.deleteFuncionarios(req, res);
}

exports.getFuncionariosCpf = function(req, res){
    return funcionariosData.getFuncionariosCpf(req, res);
}