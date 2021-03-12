import React from 'react'
import {useHistory} from 'react-router-dom'
import {ContainerTripPage,FormContainer,Form,ButtonLogin,InputForm} from './styled'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import { goToTripDetailsPage, logout} from '../../routers/Coordinator'
import useProtectedPage from '../../hooks/useProtectedPage'
import useInput from '../../hooks/useInput'


function CreateTripPage() {
  const history = useHistory()
  const[name,onChangeName] = useInput('')
  const[durationDays, onChangeDurationDays] = useInput('')
  const[date,onChangeDate] = useInput('')
  useProtectedPage()

  return (
    <ContainerTripPage>
         <Header redirectPage={()=>logout(history)} titleRedirect={"Logout"}/>
         <Main>
            <h2 onClick={()=>goToTripDetailsPage(history)}>Detalhar</h2>
            <FormContainer>
                <h1>Cadastro de Viagem</h1>
                <Form>
                     <InputForm>
                           <label>Nome da Viagem</label>
                           <input type={'text'} placeholder="nome da viagem" value={name} onChange={onChangeName}/>
                     </InputForm>
                     <InputForm>
                           <label>Duração em dias</label>
                           <input type={'number'} placeholder="duração da viagem" value={durationDays} onChange={onChangeDurationDays}/>
                     </InputForm>
                     <InputForm>
                           <label>Data partida</label>
                           <input type={'text'} placeholder="Data da partida" value={date} onChange={onChangeDate} />
                     </InputForm>
                     <InputForm>
                           <label>Descrição</label>
                           <textarea cols="26" rows= "8" >
                               
                           </textarea>
                     </InputForm>
                     <InputForm>
                           <label>Planeta</label>
                           <select>
                                <option value="">Selecione o planeta </option>
                                <option value="">Selecione o planeta </option>
                                <option value="">Selecione o planeta </option>
                                <option value="">Selecione o planeta </option>
                                <option value="">Selecione o planeta </option>
                                <option value="">Selecione o planeta </option>
                                <option value="">Selecione o planeta </option>
                                <option value="">Selecione o planeta </option>
                                <option value="">Selecione o planeta </option>
                           </select>
                     </InputForm>
                     
                     <ButtonLogin>Entrar</ButtonLogin>
                </Form>
            </FormContainer>
         </Main>
         <Footer/>        
    </ContainerTripPage>
  );
}

export default CreateTripPage;
