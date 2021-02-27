import React from 'react'
import {ImagemIconeConfirmar, ImagemIconeDescartar, ContainerFooter} from './styled'
import iconeDescarte  from '../../assets/icons/icone-negativo.jpeg'
import iconeConfirmacao  from '../../assets/icons/icone-positivo.png'
import {BASE_URL} from '../../constants/urls'
import axios from 'axios'

const Footer = (props) =>{

    
    return (
          <ContainerFooter>
                {/* <ImagemIconeConfirmar src={iconeConfirmacao}  onClick= {()=> escolherPessoa(props.idPessoa, props.escolha)}/> */}
                <ImagemIconeConfirmar src={iconeConfirmacao}  onClick= {props.escolherPessoa}/>
                <ImagemIconeDescartar src={iconeDescarte} onClick= {props.rejeitarPerfil}/>
          </ContainerFooter>
    )
}

export default Footer
