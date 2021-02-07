import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerFormularioPlaylist = styled.div`
     display: flex;
     justify-content: center;
     flex-direction: column;
     align-items: center;
     background-color: #08AE3A;
     border-bottom:1px solid #fff;

     h1{
        color:#fff;
     }
     
    
    
`

const FormularioCadastroPlaylist = styled.div`
     
     display:grid;
     grid-template-columns: 140px 1fr 1fr;
     column-gap:15px;
     margin-top:30px;
     font-size: 18px;

`

const BotaoCadastrarPlaylist = styled.button`

   width: 110px;
   height:30px;
   font-size: 18px;
   color:#fff;
   background-color: #1F06C5;

`

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
      <ContainerFormularioPlaylist>
          
          <h1>Cadastro de Playlist</h1>

          <FormularioCadastroPlaylist>
              
                  <label>Nome da Playlist:</label>
                  <input type="text" placeholder="Informe a sua playlist" value={this.state.inputNomePlaylist} onChange={this.onChangeNomePlaylist}/>
                  
              
                  <BotaoCadastrarPlaylist onClick={()=> this.criarPlaylist(this.state.inputNomePlaylist)}>Cadastrar</BotaoCadastrarPlaylist>
          </FormularioCadastroPlaylist>
      </ContainerFormularioPlaylist>
    );
  }
}

export default CadastroPlaylist;
