import React from 'react'
import axios from 'axios'

class CadastroMusica extends React.Component {

    state = {
        inputNomeMusica : "",
        inputNomeArtistaBanda :"",
        inputUrlMusica : ""
    }

    cadastrarMusica = (id)=>{

        
            
            const body = {
                name: this.state.inputNomeMusica,
                artist: this.state.inputNomeArtistaBanda,
                url: this.state.inputUrlMusica
            }

              axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,body,{
                headers:{
                    Authorization: "laecio-conceicao-muyembe"
                }
            }).then(()=>{
                 alert("Música adicionada na playlist")
            }).catch(()=>{
                 alert("Não foi possível adicionar a música na playlist")
            })
            
            this.setState({
                inputNomeMusica : "",
                inputNomeArtistaBanda :"",
                inputUrlMusica : ""
            })
            
    
        
    }

    mudarNomeMusica = (event)=>{
         this.setState({inputNomeMusica: event.target.value})
    }

    mudarNomeArtistaBanda = (event)=>{
        this.setState({inputNomeArtistaBanda: event.target.value})
   }

   mudarUrlMusica = (event)=>{
    this.setState({inputUrlMusica: event.target.value})
}
    render(){
        return (
            <div>
                <h2>Cadastro de Música</h2>
                <div>
                    <label>Nome da Música:</label>
                    <input type="text" placeholder="Informe o nome da música" onChange={this.mudarNomeMusica} value={this.state.inputNomeMusica}/>
                </div>
                <div>
                    <label>Nome do artista/ banda:</label>
                    <input type="text" placeholder="Informe o nome do artista/banda" onChange={this.mudarNomeArtistaBanda} value = {this.state.inputNomeArtistaBanda}/>
                </div>
                <div>
                    <label>Link da Música:</label>
                    <input type="text" placeholder="Informe a url da música" onChange={this.mudarUrlMusica} value ={this.state.inputUrlMusica}/>
                </div>
                <button onClick={()=>this.cadastrarMusica(this.props.idPlaylist)}>Adicionar Música </button>
            </div>
        )
    }
}

export default CadastroMusica