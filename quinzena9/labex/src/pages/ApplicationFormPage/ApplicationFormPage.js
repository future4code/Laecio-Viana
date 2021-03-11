import React from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../../components/Header/Header'
import {ContainerApplicationFormPage} from './styled'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import {goToHome} from '../../routers/Coordinator'


function ApplicationFormPage(props) {

  const history = useHistory() 

  return (
    <ContainerApplicationFormPage>
        <Header redirectPage={()=>goToHome(history)} titleRedirect={"Home"}/>
        <Main>
            <h2>Formulário</h2>
            <p>{props.idViagem}</p>
        </Main>
        <Footer/>         
    </ContainerApplicationFormPage>
  );
}

export default ApplicationFormPage;
