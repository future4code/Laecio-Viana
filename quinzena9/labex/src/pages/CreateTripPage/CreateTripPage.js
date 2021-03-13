import React from 'react'
import {useHistory} from 'react-router-dom'
import {ContainerTripPage,FormContainer,ButtonRegister,InputForm} from './styled'
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
  const[description, onChangeDescription] = useInput('')
  const[dateTrip, onChangeDateTrip] = useInput('')

  useProtectedPage()

  const enviar = (event) =>{
        event.preventDefault()
       alert("enviado")
  }
  
  return (
    <ContainerTripPage>
         <Header redirectPage={()=>logout(history)} titleRedirect={"Logout"}/>
         <Main>
            <h2 onClick={()=>goToTripDetailsPage(history)}>Detalhar</h2>
            <FormContainer onSubmit={enviar}>
                <h1>Cadastro de Viagem</h1>
                
                     <InputForm>
                           <label>Nome da Viagem</label>
                           <input type={'text'} placeholder="nome da viagem" value={name} onChange={onChangeName}  minLength="5"required/>
                     </InputForm>
                     <InputForm>
                           <label>Duração em dias</label>
                           <input type={'number'} placeholder="duração da viagem" value={durationDays} onChange={onChangeDurationDays} min="50" required/>
                     </InputForm>
                     <InputForm>
                           <label>Data partida</label>
                           <input type={'date'} value={dateTrip} onChange={onChangeDateTrip} min={dateTrip} required />
                     </InputForm>
                     <InputForm>
                           <label>Descrição</label>                           
                           <input type={'text'} placeholder="descrição" value={description} onChange={onChangeDescription}  minLength="30"  required/>
                          
                     </InputForm>
                     <InputForm>
                           <label>Planeta</label>
                           <select required>
                                <option value="">Selecione o planeta </option>
                                <option value="">Mercúrio </option>
                                <option value="">Vênus </option>
                                <option value="">Terra</option>
                                <option value="">Marte </option>
                                <option value="">Júpiter </option>
                                <option value="">Saturno </option>
                                <option value="">Urano</option>
                                <option value="">Netuno </option>
                                
                           </select>
                     </InputForm>
                     
                     <ButtonRegister>Cadastrar</ButtonRegister>
                
            </FormContainer>
         </Main>
         <Footer/>        
    </ContainerTripPage>
  );
}

export default CreateTripPage;
