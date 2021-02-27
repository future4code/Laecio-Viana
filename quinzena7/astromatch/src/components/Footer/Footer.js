import React from 'react'
import {ImagemIconeConfirmar, ImagemIconeDescartar, ContainerFooter} from './styled'
import iconeDescarte  from '../../assets/icons/icone-negativo.jpeg'
import iconeConfirmacao  from '../../assets/icons/icone-positivo.png'
import {BASE_URL} from '../../constants/urls'
import axios from 'axios'

const Footer = (props) =>{

    const escolherPessoa = (idPessoa, escolha) =>{
        const body = {
              id: idPessoa,
              choice: escolha
        }

        axios.post(`${BASE_URL}/choose-person`, body)
        .then(resposta =>{console.log(resposta)})
        .catch(erro =>{console.log(erro)})
    }
    return (
          <ContainerFooter>
                <ImagemIconeConfirmar src={iconeConfirmacao}  onClick= {()=> escolherPessoa(props.idPessoa, props.escolha)}/>
                <ImagemIconeDescartar src={iconeDescarte}/>
          </ContainerFooter>
    )
}

export default Footer
