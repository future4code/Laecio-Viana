import React from 'react'
import imagem from '../../assets/icons/icone-pessoas.png'
import imagemRetorno from '../../assets/icons/retorno.png'
import {ImagemLogo, ContainerHeader, TituloAplicacao} from './styled'

const Header = (props) =>{
    return (
          <ContainerHeader>
               {props.mudaTela? <ImagemLogo src={imagem} onClick={props.mudaTela}/>:<ImagemLogo src={imagemRetorno} onClick={props.voltaTela}/>} 
               <TituloAplicacao>AstroMatch</TituloAplicacao>
          </ContainerHeader>
    )
}

export default Header
