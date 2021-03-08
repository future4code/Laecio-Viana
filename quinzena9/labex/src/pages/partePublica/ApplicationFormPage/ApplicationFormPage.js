import React from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../../../components/Header/Header'
import {ContainerApplicationFormPage} from './styled'
import Footer from '../../../components/Footer/Footer'
import Main from '../../../components/Main/Main'


function ApplicationFormPage() {
  const history = useHistory()

  const goToHome = () =>{
       history.push('/')
  }  

  return (
    <ContainerApplicationFormPage>
        <Header redirectPage={goToHome} titleRedirect={"Home"}/>
        <Main>
            <h2>Formulário</h2>
        </Main>
        <Footer/>         
    </ContainerApplicationFormPage>
  );
}

export default ApplicationFormPage;
