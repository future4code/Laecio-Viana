import React from 'react'
import styled from 'styled-components'
import imagemExcluir from '../imagens/delete-icon.png'
import axios from 'axios'


const IconeDeletar = styled.img`
  width:20px;
  height:20px;

`



class ItemPlaylist extends React.Component {

    state = {
        itemsPlaylistMostradas: false,
        musicasPlaylist:[]
    }

    mostrarDetalhesPlaylist = (id)=>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
            headers :{
                Authorization: "laecio-conceicao-muyembe"
            }
        }).then((resposta )=>{
            

            
             this.setState({
                 itemsPlaylistMostradas: !this.state.itemsPlaylistMostradas,
                 musicasPlaylist: resposta.data.result.tracks
            
            })

          
        }).catch((error)=>{
             console.log(error.message)
        })
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
         const musicasPlaylist = this.state.musicasPlaylist.map((musica)=>{
             return <div key={musica.id}>
                       
                        <p>Nome da playlist:{this.props.playlist.name}</p>
                        <p>Nome da música :{musica.name}</p>
                        <p>Banda/artista:{musica.artist}</p>
  
  
                    </div>
  
         })
        return(

            <div>
                {this.props.playlist.name}
                <IconeDeletar src={imagemExcluir} alt="icone excluir playlist" onClick={()=>this.deletarPlaylist(this.props.playlist.id)}/>
                <button onClick={()=>this.mostrarDetalhesPlaylist(this.props.playlist.id)}> Detalhar</button>
                {this.state.itemsPlaylistMostradas? <div>{musicasPlaylist}</div>:<div></div>}   
                    
            </div>
        )

    }
}
export default ItemPlaylist