import React,{useState, useEffect} from 'react'
import styled from 'styled-components';
import TelaInicial from './screens/TelaInicial/TelaInicial'
import TelaMatches from './screens/TelaMatches/TelaMatches'
import GlobalStyle from './styles/global'
import {BASE_URL} from './constants/urls'
import axios from 'axios'

function App() {
  const[pessoa, setPessoa] = useState({})    
  const[telaAtual, setTelaAtual] = useState("tela escolha")
  const[escolha, setEscolha] = useState(true)

    useEffect(()=>{
         axios.get(`${BASE_URL}/person`)
         .then(resposta=>{            
             setPessoa(resposta.data.profile)
         })
         .catch(erro =>{
             console.log(erro)
         })
    }, [])

  const darMatchOuDescartar = () => {
        setEscolha(true)

  }
  

  const mostrarTela = ()=>{
        switch(telaAtual){
          case "tela escolha":
            return  <TelaInicial mudaTela={trocarTela} perfil={pessoa} idPessoa = {pessoa.id} escolha={escolha}/>
          case "tela matches" :
            return <TelaMatches voltaTela={trocarTela}/>
        }
  }

  const trocarTela = () =>{
        telaAtual === "tela escolha"? setTelaAtual("tela matches"): setTelaAtual("tela escolha") 
       
  }

  return (
    <div>       
        {mostrarTela()}
        <GlobalStyle/>
       
    </div>
  );
}

export default App;
