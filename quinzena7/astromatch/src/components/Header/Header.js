import React from 'react'
import imagem from '../../assets/icons/icone-pessoas.png'
import {ImagemLogo, ContainerHeader, TituloAplicacao} from './styled'

const Header = () =>{
    return (
          <ContainerHeader>
               <ImagemLogo src={imagem} />
               <TituloAplicacao>AstroMatch</TituloAplicacao>


          </ContainerHeader>
    )
}

export default Header
