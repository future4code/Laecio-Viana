import React from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../../../components/Header/Header'
import {ContainerApplicationFormPage} from './styled'

function ApplicationFormPage() {
  const history = useHistory()

  const goToHome = () =>{
       history.push('/')
  }  

  return (
    <ContainerApplicationFormPage>
        <Header redirectPage={goToHome} titleRedirect={"Home"}/>         
    </ContainerApplicationFormPage>
  );
}

export default ApplicationFormPage;
