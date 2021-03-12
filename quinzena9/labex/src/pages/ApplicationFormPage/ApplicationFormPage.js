import React from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../../components/Header/Header'
import {ContainerApplicationFormPage,FormContainer,Form,InputForm,ButtonLogin} from './styled'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import {goToHome} from '../../routers/Coordinator'
import useInput from '../../hooks/useInput'


function ApplicationFormPage() {

  const history = useHistory() 
  const[name,onChangeName] = useInput('')
  const[age, onChangeAge] = useInput('')
  const[profession, onChangeProfession] = useInput('')

  return (
    <ContainerApplicationFormPage>
        <Header redirectPage={()=>goToHome(history)} titleRedirect={"Home"}/>
        <Main>           
            <FormContainer>
                <h1>Formulário</h1>
                <Form>
                     <InputForm>
                           <label>Nome</label>
                           <input type={'text'} placeholder="Digite seu Nome" value={name} onChange={onChangeName}/>
                     </InputForm>
                     <InputForm>
                           <label>Idade</label>
                           <input type={'number'} placeholder="Informe sua idade" value={age} onChange={onChangeAge}/>
                     </InputForm>
                     <InputForm>
                           <label>Profissão</label>
                           <input type={'text'} placeholder="Digite sua profissão" value={profession} onChange={onChangeProfession}/>
                     </InputForm>
                     <InputForm>
                           <label>Texto explicativo</label>
                           <textarea cols="26" rows= "8" >
                               
                           </textarea>
                     </InputForm>
                     <InputForm>
                           <label>País</label>
                           <select>
                                <option value="">Selecione seu país</option>
                           </select>
                     </InputForm>
                     <InputForm>
                           <label>Viagem</label>
                           <select>
                                <option value="">Selecione a Viagem</option>
                           </select>
                     </InputForm>
                     <ButtonLogin>Entrar</ButtonLogin>
                </Form>
            </FormContainer>
            
        </Main>
        <Footer/>         
    </ContainerApplicationFormPage>
  );
}

export default ApplicationFormPage;
