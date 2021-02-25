import React,{useState, useEffect} from 'react'
import styled from 'styled-components';
import TelaInicial from './screens/TelaInicial/TelaInicial'
import TelaMatches from './screens/TelaMatches/TelaMatches'
import GlobalStyle from './styles/global'

function App() {

  const[telaAtual, setTelaAtual] = useState("tela escolha")

  const mostrarTela = ()=>{
        switch(telaAtual){
          case "tela escolha":
            return  <TelaInicial mudaTela={trocarTela}/>
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
