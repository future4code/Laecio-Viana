import React from 'react'
import CadastroPlaylist from './components/CadastroPlaylist'
import ListaPlaylist from './components/ListaPlaylist'
import Header from './components/Header'
import styled from 'styled-components'

const ContainerPrincipal = styled.div`
    
     max-width: 100vw;
     min-height: 100vh;
     display:grid;
     grid-template-rows: 100px 1fr 1fr;
   
`

class App extends React.Component {
 
  render(){

    return (
      <ContainerPrincipal>
          <Header/>
          <CadastroPlaylist/>
          <ListaPlaylist/>
      </ContainerPrincipal>
    );
  }
}

export default App;
