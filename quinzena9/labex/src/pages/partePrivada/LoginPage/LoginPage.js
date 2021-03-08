import React from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../../../components/Header/Header'
import {ContainerLoginPage} from './styled'
import Footer from '../../../components/Footer/Footer'
import Main from '../../../components/Main/Main'

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
         <Main>

            <h2 onClick={goToCreateTripPage}>Cadastrar</h2>
         </Main>
         <Footer/>
    </ContainerLoginPage>
  );
}

export default LoginPage;
