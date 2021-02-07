import React from 'react'
import styled from 'styled-components'
import imagemExcluir from '../imagens/delete-icon.png'
import axios from 'axios' 
import  CadastroMusica from './CadastroMusica'


const IconeDeletar = styled.img`
  width:40px;
  height:30px;

`

const IconeDeletarMusica = styled.img`
  width:40px;
  height:30px;

`

const ContainerPlaylist = styled.div`
     display: grid;
     grid-template-columns: 200px 200px 200px 200px  ;
     column-gap:15px;     
`

const ContainerMusica = styled.div`
       display:grid;
      grid-template-columns:1fr 1fr; 
      align-items: center;
      

`

const ContainerCadastroMusica = styled.div`
     grid-column: 1 / span 2;
`

const ContainerItemsPlaylist = styled.div`
     grid-column: 3 / span 2;
`


const NomePlaylist  = styled.div`
     font-size:22px;
     font-weight:bold;
`

const NomeDetalhePlaylist  = styled.p`
     font-size:20px;
     font-weight:bold;
`

const BotaoDetalharPlaylist = styled.button`

   width: 200px;
   height:40px;
   font-size: 18px;
   color:#fff;
   background-color: #1F06C5;

`

const BotaoMostrarFormularioMusica = styled.button`

   width: 200px;
   height:40px;
   font-size: 18px;
   color:#fff;
   background-color: #1F06C5;

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

    deletarMusica = (idPlaylist, idMusica)=>{
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks/${idMusica}`,{
            headers: {
                Authorization:"laecio-conceicao-muyembe"
            }
        }).then((resposta)=>{
            alert("Música deletada da playlist")
            
        }).catch(()=>{
            alert("Não foi possível delatar música da playlist")
        })

    }
    render(){
         const musicasPlaylist = this.state.musicasPlaylist.map((musica)=>{
             return <ContainerMusica key={musica.id}>
                       
                        <NomeDetalhePlaylist>Nome da música : </NomeDetalhePlaylist><p>{musica.name}</p>
                        <NomeDetalhePlaylist>Banda/artista:  </NomeDetalhePlaylist><p> {musica.artist}</p>
                        <audio src={musica.url}  controls/> <IconeDeletarMusica src={imagemExcluir} alt="icone excluir musica" onClick={()=>this.deletarMusica(this.props.playlist.id, musica.id)}/>
                        
                            
                        
                        
  
  
                    </ContainerMusica>
  
         })
        return(

            <ContainerPlaylist>
                <NomePlaylist>{this.props.playlist.name}</NomePlaylist>
                <IconeDeletar src={imagemExcluir} alt="icone excluir playlist" onClick={()=>this.deletarPlaylist(this.props.playlist.id)}/>
                <BotaoDetalharPlaylist onClick={()=>this.mostrarDetalhesPlaylist(this.props.playlist.id)}>{this.state.itemsPlaylistMostradas? 'Esconder detalhes': 'Mostrar detalhes'}</BotaoDetalharPlaylist>
                <BotaoMostrarFormularioMusica onClick ={this.adicionarMusicaNaPlaylist}>{this.state.formularioMostrado? 'Esconder Formulário': 'Mostrar Formulário'}</BotaoMostrarFormularioMusica>
                <ContainerCadastroMusica>{this.state.formularioMostrado ? <CadastroMusica idPlaylist={this.props.playlist.id}/>:<div></div>}</ContainerCadastroMusica>
                <ContainerItemsPlaylist>{this.state.itemsPlaylistMostradas? <div><h2>Detalhes da Playlist</h2>{musicasPlaylist}</div>:<div></div>}</ContainerItemsPlaylist>
                 
                    
            </ContainerPlaylist>
        )

    }
}
export default ItemPlaylist