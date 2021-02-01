import React from 'react'
import axios from 'axios'

class CadastroPlaylist extends React.Component {

    state = {
        inputNomePlaylist : ""
    }

    onChangeNomePlaylist = (event) =>{

        this.setState({inputNomePlaylist:event.target.value})

    }

    criarPlaylist = (nomePlaylist) =>{
       const body = {
           name: nomePlaylist
       }

       axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body,{
           headers:{
               Authorization: "laecio-conceicao-muyembe"
           }
       }).then(()=>{
           alert("Playlist cadastrada com sucesso")
       })

       .catch(()=>{
           alert("Não foi possível cadastrar playlist")
       })

       this.setState({inputNomePlaylist:""})
    }
  render(){

    return (
      <div>
          <hr/>
          <h1>Cadastro de Playlist</h1>

          <form>
              <div>
                  <label>Nome da Playlist:</label>
                  <input type="text" placeholder="Informe a sua playlist" value={this.state.inputNomePlaylist} onChange={this.onChangeNomePlaylist}/>
                  
              </div>
          </form>
          <button onClick={()=> this.criarPlaylist(this.state.inputNomePlaylist)}>Cadastrar</button><hr/>
      </div>
    );
  }
}

export default CadastroPlaylist;
