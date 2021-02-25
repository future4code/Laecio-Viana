import React, {useEffect, useState} from 'react'
import {ContainerCardInformacaoPessoa, ImagemPerfil, Descricao, Apresentacao} from './styled'
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'


const CardInformacoesPessoa = () =>{

    const[pessoa, setPessoa] = useState({})    

    useEffect(()=>{
         axios.get(`${BASE_URL}/person`)
         .then(resposta=>{            
             setPessoa(resposta.data.profile)
         })
         .catch(erro =>{
             console.log(erro)
         })
    }, [BASE_URL])
    return (
          <ContainerCardInformacaoPessoa>
               <ImagemPerfil src={pessoa.photo} alt="Foto da pessoa"/>
               <Apresentacao>{pessoa.name} , {pessoa.age}</Apresentacao>
               <Descricao>{pessoa.bio}</Descricao>
          </ContainerCardInformacaoPessoa>
             
          
    )
}
export default CardInformacoesPessoa
