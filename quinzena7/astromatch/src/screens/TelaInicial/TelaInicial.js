import React from 'react'
import {ContainerTelaInicial}  from './styled'
import Header from '../../components/Header/Header'
import CardInformacoesPessoa from '../../components/CardInformacoesPessoa/CardInformacoesPessoa'
import Footer from '../../components/Footer/Footer'

function TelaInicial() {
  return (
    <ContainerTelaInicial>
       
         <Header/>
         <CardInformacoesPessoa/>
         <Footer/>

    </ContainerTelaInicial>
  );
}

export default TelaInicial;
