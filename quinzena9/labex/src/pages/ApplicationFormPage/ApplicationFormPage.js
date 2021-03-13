import React from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../../components/Header/Header'
import {ContainerApplicationFormPage,FormContainerCandidate,InputForm,ButtonRegisterCandidate} from './styled'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import {goToHome} from '../../routers/Coordinator'
import useInput from '../../hooks/useInput'


function ApplicationFormPage() {

  const history = useHistory() 
  const[name,onChangeName] = useInput('')
  const[age, onChangeAge] = useInput('')
  const[profession, onChangeProfession] = useInput('')
  const[textDescription, onChangeTextDescription] = useInput('')

  const onSubmitCandidate = (event) =>{
          event.preventDefault()
          alert("deu certo")
  }


  return (
    <ContainerApplicationFormPage>
        <Header redirectPage={()=>goToHome(history)} titleRedirect={"Home"}/>
        <Main>           
            <FormContainerCandidate onSubmit={onSubmitCandidate}>
                <h1>Formulário</h1>
                
                     <InputForm>
                           <label>Nome</label>
                           <input type={'text'} placeholder="Digite seu Nome" value={name} onChange={onChangeName} minLength="3" required/>
                     </InputForm>
                     <InputForm>
                           <label>Idade</label>
                           <input type={'number'} placeholder="Informe sua idade" value={age} onChange={onChangeAge} min="18" required/>
                     </InputForm>
                     <InputForm>
                           <label>Profissão</label>
                           <input type={'text'} placeholder="Digite sua profissão" value={profession} onChange={onChangeProfession} minLength="10" required/>
                     </InputForm>
                     <InputForm>
                           <label>Texto explicativo</label>                           
                           <input type={'text'} placeholder="explique sua candidatura" value={textDescription} onChange={onChangeTextDescription} minLength="30" required/>
  
                     </InputForm>
                     <InputForm>
                           <label>País</label>
                           <select required>
                                <option value="">Selecione seu país</option>
                                <option value="">país</option>
                           </select>
                     </InputForm>
                     <InputForm>
                           <label>Viagem</label>
                           <select required>
                                <option value="">Selecione a Viagem</option>
                                <option value="">país</option>
                           </select>
                     </InputForm>
                     <ButtonRegisterCandidate>Candidatar</ButtonRegisterCandidate>                
            </FormContainerCandidate>
            
        </Main>
        <Footer/>         
    </ContainerApplicationFormPage>
  );
}

export default ApplicationFormPage;
