import React from 'react'
import imagem from '../../assets/icons/icone-pessoas.png'
import {ImagemLogo, ContainerHeader, TituloAplicacao} from './styled'

const Header = (props) =>{
    return (
          <ContainerHeader>
               <ImagemLogo src={imagem} onClick={props.mudaTela}/>
               <TituloAplicacao>AstroMatch</TituloAplicacao>
          </ContainerHeader>
    )
}

export default Header
