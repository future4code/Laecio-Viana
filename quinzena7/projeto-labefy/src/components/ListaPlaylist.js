import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ItemPlaylist from './ItemPlaylist'


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
              return    <li key={playlist.id}>
                            <ItemPlaylist playlist={playlist}/>
                              
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