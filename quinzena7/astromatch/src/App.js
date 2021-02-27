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
  

    useEffect(()=>{
         buscarPessoa()
    }, []) 

    const buscarPessoa = () =>{
      axios.get(`${BASE_URL}/person`)
      .then(resposta=>{   
                  
          setPessoa(resposta.data.profile)
      })
      .catch(erro =>{
          console.log(erro)
      })
    }

    const darMatchPessoa = () =>{
      const body = {
        id: pessoa.id,
        choice: true
      }

      axios.post(`${BASE_URL}/choose-person`, body)
      .then(resposta =>{buscarPessoa()})
      .catch(erro =>{console.log(erro)})
    }    
   
   

  const mostrarTela = ()=>{
        switch(telaAtual){
          case "tela escolha":
            return  <TelaInicial mudaTela={trocarTela} perfil={pessoa}  escolha={darMatchPessoa} rejeicao = {buscarPessoa}/>
          case "tela matches" :
            return <TelaMatches voltaTela={trocarTela} mostraPessoa= {buscarPessoa}/>
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
