import React from 'react'
import {ContainerTelaMatches}  from './styled'
import Header from '../../components/Header/Header'

function TelaMatches(props) {
  return (
    <ContainerTelaMatches>      
        <Header voltaTela={props.voltaTela}/>
    </ContainerTelaMatches>
  );
}

export default TelaMatches;
