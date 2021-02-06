import React from 'react'
import styled from 'styled-components'
import imagemExcluir from '../imagens/delete-icon.png'
import axios from 'axios' 
import  CadastroMusica from './CadastroMusica'


const IconeDeletar = styled.img`
  width:20px;
  height:20px;

`


class ItemPlaylist extends React.Component {

    state = {
        itemsPlaylistMostradas: false,
        musicasPlaylist:[],
        formularioMostrado: false
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

    adicionarMusicaNaPlaylist = () =>{
        this.setState({formularioMostrado : !this.state.formularioMostrado})
    }
    render(){
         const musicasPlaylist = this.state.musicasPlaylist.map((musica)=>{
             return <div key={musica.id}>
                       
                        <p>Nome da playlist:{this.props.playlist.name}</p>
                        <p>Nome da música :{musica.name}</p>
                        <p>Banda/artista:{musica.artist}</p>
                        <audio src={musica.url}  controls>
                            
                        </audio>
                        <hr/>
  
  
                    </div>
  
         })
        return(

            <div>
                {this.props.playlist.name}
                <IconeDeletar src={imagemExcluir} alt="icone excluir playlist" onClick={()=>this.deletarPlaylist(this.props.playlist.id)}/>
                <button onClick={()=>this.mostrarDetalhesPlaylist(this.props.playlist.id)}>{this.state.itemsPlaylistMostradas? 'Esconder detalhes': 'Mostrar detalhes'}</button>
                <button onClick ={this.adicionarMusicaNaPlaylist}>{this.state.formularioMostrado? 'Esconder Formulário': 'Mostrar Formulário'}</button>
                {this.state.formularioMostrado ? <CadastroMusica idPlaylist={this.props.playlist.id}/>:<div></div>}
                {this.state.itemsPlaylistMostradas? <div>{musicasPlaylist}</div>:<div></div>}   
              
                 
                    
            </div>
        )

    }
}
export default ItemPlaylist