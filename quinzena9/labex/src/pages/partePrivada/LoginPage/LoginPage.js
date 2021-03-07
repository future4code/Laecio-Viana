import React from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../../../components/Header/Header'
import {ContainerLoginPage} from './styled'

function LoginPage() {

  const history = useHistory()

  const goToHome = () =>{
       history.push('/')
  }  

  const goToCreateTripPage = () =>{
       history.push('/trips/create')
     
  }

  return (
    <ContainerLoginPage>                  
         <Header redirectPage={goToHome} titleRedirect={"Home"}/>
         <h2 onClick={goToCreateTripPage}>Cadastrar</h2>
    </ContainerLoginPage>
  );
}

export default LoginPage;
