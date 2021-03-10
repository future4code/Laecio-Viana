import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../../../components/Header/Header'
import {ContainerLoginPage, FormContainer, InputForm, ButtonLogin, Form} from './styled'
import Footer from '../../../components/Footer/Footer'
import Main from '../../../components/Main/Main'
import {goToCreateTripPage, goToHome} from '../../../routers/Coordinator'
import useInput from '../../../hooks/useInput'
import {BASE_URL} from '../../../constants/urls'
import axios from 'axios'

function LoginPage() {

  const history = useHistory() 
  const[email, onChangeEmail] = useInput("")
  const[password, onChangePassword] = useInput("")  

  const onSubmit = ()=>{
       const body = {
          email,
          password
       }

       axios.post(`${BASE_URL}/login`, body).then((response) =>{
             localStorage.setItem("token", response.data.token)
             goToCreateTripPage(history)
       }).catch((error) =>{
          alert(error)
       })
  }

  useEffect(()=>{
       const token = localStorage.getItem("token")

       if (token){
             goToCreateTripPage(history) 
       }

  }, [history])

  return (
    <ContainerLoginPage>                  
         <Header redirectPage={()=>goToHome(history)} titleRedirect={"Home"}/>
         <Main>            
            <FormContainer>
                <h1>Login</h1>
                <Form>
                     <InputForm>
                           <label>Email</label>
                           <input type={'email'} placeholder="Digite seu Email" value={email} onChange={onChangeEmail}/>
                     </InputForm>
                     <InputForm>
                           <label>Senha</label>
                           <input type={'password'} placeholder="Digite sua Senha" value={password} onChange={onChangePassword}/>
                     </InputForm>
                     <ButtonLogin onClick={onSubmit}>Entrar</ButtonLogin>
                </Form>
            </FormContainer>
         </Main>
         <Footer/>
    </ContainerLoginPage>
  );
}

export default LoginPage;
