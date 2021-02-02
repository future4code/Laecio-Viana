import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import imagemExcluir from '../imagens/delete-icon.png'

const IconeDeletar = styled.img`
  width:20px;
  height:20px;

`

class ListaPlaylist extends React.Component{

    state = {
        listaPlaylists:[],
        quantidadePlaylists: 0
    }
    componentDidMount = () =>{
        this.mostrarPlaylists()
    }

    componentDidUpdate = () =>{
        this.mostrarPlaylists()
    }

    mostrarPlaylists = async() =>{
        try {
            
            const listas =  await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
                 headers:{
                     Authorization: "laecio-conceicao-muyembe"
                 }
             })

             this.setState({
                 listaPlaylists:listas.data.result.list,
                 quantidadePlaylists:listas.data.result.quantity
                })
            
        } catch (error) {
            
            alert("Ocorreu um erro ao carregar lista de playlists")
        }
           
        
    }

    deletarPlaylist = (idPlaylist)=>{
       axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}`, {
           headers:{
            Authorization: "laecio-conceicao-muyembe"
           }
       }).then(()=>{
           alert("Playlist deletada com sucesso")
           
       }).catch(()=>{
           alert("Não foi possível deletar playlist")
       })
    }
    render(){
      
        
        const playlistsRenderizadas = this.state.listaPlaylists.map((playlist)=>{
              return <li key={playlist.id}>
                        {playlist.name}
                        <IconeDeletar src={imagemExcluir} alt="icone excluir playlist" onClick={()=>this.deletarPlaylist(playlist.id)}/>
                     </li>
        })

       
        
        return (
            <div>
                <h1>Lista de Playlists</h1>
                {this.state.quantidadePlaylists === 0 ?<h3>Não possui playlist cadastrada</h3>:<ul>{playlistsRenderizadas}</ul>}
                <hr/>
            </div>
        )
    }
}

export default ListaPlaylist