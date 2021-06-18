const database = require('../config/database');

database.connect();

// método que informa todos os funcionários cadastrados
exports.getFuncionarios = function(){
    return res.status (201) .send ({
        message: "teste !"
    });  
};


// método que adiciona um funcionário novo com um try catch pra tratamento de erro
exports.novoFuncionarios = async (req, res) =>{
    try{
    
    const { nome, cpf, funcao, regime, email, telefone1, telefone2, cnpj} = req.body;
       await database.query(
        `INSERT INTO public.funcionarios (nome, cpf, funcao, regime, email, telefone1, telefone2, cnpj) VALUES('${nome}', '${cpf}', '${funcao}', '${regime}', '${email}', '${telefone1}', '${telefone2}', '${cnpj}')`,
    );
    res.status(201).send({
        message: "Funcionario adicionado com sucesso"
  
    });
    
}
catch(error){
    //throw new Error(error);
    console.log(error);
    res.status(500).send({
        message: "erro inesperado"
  
    });
}
};


// método que edita o funcionário pelo id dele
exports.editarFuncionariosId = async(req, res)=>{
    const editarFuncionarios = parseInt(req.params.id);
    const { nome, cpf, funcao, regime, email, telefone1, telefone2, cnpj} = req.body;
    await database.query(
        `UPDATE public.funcionarios SET nome = '${nome}', cpf = '${cpf}',funcao = '${funcao}', regime = '${regime}', email = '${email}', telefone1 = '${telefone1}', telefone2 = '${telefone2}', cnpj = '${cnpj}'  WHERE id = ${editarFuncionarios}`
    );
    res.status (201) .send ({
        message: "Funcionario Editado !"
    });  

};

// método que pega os funcionários pelo id dele
exports.getFuncionariosId = (req, res) => {
    const funcionariosID = parseInt (req.params.id);
    return database.query(`SELECT * FROM public.funcionarios WHERE id = ${funcionariosID}`);
    
};

// método que deleta o funcionário pelo id dele
exports.deleteFuncionarios = async (req, res) => { 
    const deleteFuncionarios = parseInt (req.query.id); 
        await database.query (`DELETE FROM public.funcionarios WHERE id = ${deleteFuncionarios}`); 
    res.status (201) .send ({
        message: "Funcionario Deletado !"
    }); 
  }