import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ItemPlaylist from './ItemPlaylist'

const ContainerListaPlaylists = styled.div`
     background-color: #08AE3A;
     display:flex;
     flex-direction: column;
     align-items: center;

     h1{
        color:#fff;
     }


`


class ListaPlaylist extends React.Component{

    state = {
        listaPlaylists:[],
        quantidadePlaylists: 0,
        
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

   

   
    render(){

        
      
        
        const playlistsRenderizadas = this.state.listaPlaylists.map((playlist)=>{
              return    <div key={playlist.id}>
                            <ItemPlaylist playlist={playlist}/>
                              
                        </div>
                 
        })      

       
        
        return (
            <ContainerListaPlaylists>
                <h1>Lista de Playlists</h1>
                {this.state.quantidadePlaylists === 0 ?<h3>Não possui playlist cadastrada</h3>:<div>{playlistsRenderizadas}</div>}
                        
                
               
            </ContainerListaPlaylists>
        )
    }
}

export default ListaPlaylist