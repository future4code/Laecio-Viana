import React from 'react'
import {ContainerTelaInicial}  from './styled'
import Header from '../../components/Header/Header'
import CardInformacoesPessoa from '../../components/CardInformacoesPessoa/CardInformacoesPessoa'
import Footer from '../../components/Footer/Footer'

function TelaInicial(props) {
  return (
    <ContainerTelaInicial>
       
         <Header mudaTela={props.mudaTela} limpar={props.rejeicao}/>
         <CardInformacoesPessoa perfil={props.perfil}/>
         <Footer escolherPessoa={props.escolha}  rejeitarPerfil= {props.rejeicao}/>

    </ContainerTelaInicial>
  );
}

export default TelaInicial;
