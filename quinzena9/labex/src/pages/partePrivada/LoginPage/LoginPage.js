import React from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../../../components/Header/Header'
import {ContainerLoginPage} from './styled'
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

       axios.post(`${BASE_URL}/login`, body).then(response =>{
             localStorage.setItem("token", response.data.token)
             goToCreateTripPage(history)
       }).catch(error =>{
         console.log(error)
       })
  }

  return (
    <ContainerLoginPage>                  
         <Header redirectPage={()=>goToHome(history)} titleRedirect={"Home"}/>
         <Main>            
            <div>
                <label>Email</label>
                <input type={'email'} placeholder="Digite seu Email" value={email} onChange={onChangeEmail}/>
                <label>Senha</label>
                <input type={'password'} placeholder="Digite sua Senha" value={password} onChange={onChangePassword}/>
                <button onClick={onSubmit}>Entrar</button>
            </div>
         </Main>
         <Footer/>
    </ContainerLoginPage>
  );
}

export default LoginPage;
