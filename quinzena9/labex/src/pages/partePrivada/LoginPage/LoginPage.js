import React from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../../../components/Header/Header'
import {ContainerLoginPage, MainLoginPage} from './styled'
import Footer from '../../../components/Footer/Footer'

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
         <MainLoginPage>

            <h2 onClick={goToCreateTripPage}>Cadastrar</h2>
         </MainLoginPage>
         <Footer/>
    </ContainerLoginPage>
  );
}

export default LoginPage;
