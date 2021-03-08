import React from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../../../components/Header/Header'
import {ContainerApplicationFormPage, MainApplicationFormPage} from './styled'
import Footer from '../../../components/Footer/Footer'


function ApplicationFormPage() {
  const history = useHistory()

  const goToHome = () =>{
       history.push('/')
  }  

  return (
    <ContainerApplicationFormPage>
        <Header redirectPage={goToHome} titleRedirect={"Home"}/>
        <MainApplicationFormPage>
            <h2>Formulário</h2>
        </MainApplicationFormPage>
        <Footer/>         
    </ContainerApplicationFormPage>
  );
}

export default ApplicationFormPage;
