import React, {useEffect, useState} from 'react'
import {ContainerCardInformacaoPessoa, ImagemPerfil, Descricao, Apresentacao} from './styled'
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'


const CardInformacoesPessoa = (props) =>{      

    return (
          <ContainerCardInformacaoPessoa>
               <ImagemPerfil src={props.perfil.photo} alt="Foto da pessoa"/>
               <Apresentacao>{props.perfil.name} , {props.perfil.age}</Apresentacao>
               <Descricao>{props.perfil.bio}</Descricao>
          </ContainerCardInformacaoPessoa>           
          
    )
}
export default CardInformacoesPessoa
