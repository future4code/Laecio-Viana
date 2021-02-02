import React from 'react'
import CadastroPlaylist from './components/CadastroPlaylist'
import ListaPlaylist from './components/ListaPlaylist'

class App extends React.Component {
 
  render(){

    return (
      <div>
          <h1>Laecio</h1>
          <CadastroPlaylist/>
          <ListaPlaylist/>
      </div>
    );
  }
}

export default App;
