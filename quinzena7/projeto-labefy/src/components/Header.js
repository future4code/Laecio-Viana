import React from 'react'
import styled from 'styled-components'
import imagemLogo  from '../imagens/som.jpeg'

const ContainerCabecalho = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #657;
    color: #fff;
     
`
const Imagem = styled.img`
   width: 70px;
   height: 70px;
   margin-right: 30px;
`

const Titulo = styled.div`

    font-size: 28px;
    margin-left: 30px;

`




class Header extends React.Component {
    render(){
        return(
            <ContainerCabecalho>
                <Titulo>Spot4fy</Titulo>
                <Imagem src={imagemLogo} alt="logo do site"/>
            </ContainerCabecalho>
        )
    }
}

export default Header