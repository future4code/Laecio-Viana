import React from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../../../components/Header/Header'
import {ContainerLoginPage} from './styled'
import Footer from '../../../components/Footer/Footer'
import Main from '../../../components/Main/Main'
import {goToCreateTripPage, goToHome} from '../../../routers/Coordinator'

function LoginPage() {

  const history = useHistory() 

  return (
    <ContainerLoginPage>                  
         <Header redirectPage={()=>goToHome(history)} titleRedirect={"Home"}/>
         <Main>
            <h2 onClick={()=>goToCreateTripPage(history)}>Cadastrar</h2>
         </Main>
         <Footer/>
    </ContainerLoginPage>
  );
}

export default LoginPage;
