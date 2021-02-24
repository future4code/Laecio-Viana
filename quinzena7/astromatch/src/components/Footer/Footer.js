import React from 'react'
import {ImagemIconeConfirmar, ImagemIconeDescartar, ContainerFooter} from './styled'
import iconeDescarte  from '../../assets/icons/icone-negativo.jpeg'
import iconeConfirmacao  from '../../assets/icons/icone-positivo.png'

const Footer = () =>{
    return (
          <ContainerFooter>
                <ImagemIconeConfirmar src={iconeConfirmacao}/>
                <ImagemIconeDescartar src={iconeDescarte}/>
          </ContainerFooter>
    )
}

export default Footer
