import React from 'react'
import {useHistory} from 'react-router-dom'
import {ContainerTripPage} from './styled'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Main from '../../../components/Main/Main'
import {goToLoginPage, goToTripDetailsPage} from '../../../routers/Coordinator'

function CreateTripPage() {
  const history = useHistory()

  return (
    <ContainerTripPage>
         <Header redirectPage={()=>goToLoginPage(history)} titleRedirect={"Logout"}/>
         <Main>
            <h2 onClick={()=>goToTripDetailsPage(history)}>Detalhar</h2>
         </Main>
         <Footer/>
        
    </ContainerTripPage>
  );
}

export default CreateTripPage;
