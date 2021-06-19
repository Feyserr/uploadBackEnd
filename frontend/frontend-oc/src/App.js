import React,{useState, useEffect} from "react";
import './App.css';
import Axios from "axios";

function App() {

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [funcao, setFuncao] = useState("");
  const [regime, setRegime] = useState("");
  const [email, setEmail] = useState("");
  const [telefone1, setTelefone1] = useState("");
  const [telefone2, setTelefone2] = useState("");
  const [cnpj, setCnpj] = useState("");

  const submitFuncionario = ()=>{
    Axios.post("https://uploadbackendfuncionarios.herokuapp.com/novoFuncionarios", 
    {nome:nome, cpf:cpf, funcao:funcao,regime:regime, email:email, telefone1:telefone1, telefone2:telefone2,cnpj:cnpj}).then(()=>{
      alert('Funcionario adicionado com sucesso');
    })
  }

  return (
    <div className="App">
      <h1>Cadastro de Funcionários</h1>
    
    <div className="form">
      
      <input type = "text" placeholder = "Digite um nome " name="nome" onChange={(e)=>{
        setNome = e.target.value
      }}/>
      <input type = "text" placeholder = "Digite o cpf" name="cpf" onChange={(e)=>{
        setCpf = e.target.value
      }}/>
      <input type = "text" placeholder = "Digite a função" name="funcao" onChange={(e)=>{
        setFuncao = e.target.value
      }}/>
      <input type = "text" placeholder = "Digite o regime" name="regime" onChange={(e)=>{
        setRegime = e.target.value
      }}/>
      <input type = "text" placeholder = "Digite o email" name="email" onChange={(e)=>{
        setEmail = e.target.value
      }}/>
      <input type = "text" placeholder = "Digite o telefone1" name="telefone1" onChange={(e)=>{
        setTelefone1 = e.target.value
      }}/>
      <input type = "text" placeholder = "Digite o telefone2" name="telefone2" onChange={(e)=>{
        setTelefone2 = e.target.value
      }}/>
      <input type = "text" placeholder = "Digite o cnpj" name="cnpj" onChange={(e)=>{
        setCnpj = e.target.value
      }}/>
      
      
      <button onClick ={submitFuncionario}>Enviar</button>
      
      
      </div>
    </div>
  );
}

export default App;
