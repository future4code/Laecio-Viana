import React from 'react'
import {useHistory} from 'react-router-dom'
import {ContainerTripPage} from './styled'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Main from '../../../components/Main/Main'

function CreateTripPage() {
  const history = useHistory()

  const goToLoginPage = () =>{
      history.push('/login')
  }

  const goToTripDetailsPage = () =>{
    history.push('/trips/details')
  }
  return (
    <ContainerTripPage>
         <Header redirectPage={goToLoginPage} titleRedirect={"Logout"}/>
         <Main>

         <h2 onClick={goToTripDetailsPage}>Detalhar</h2>
         </Main>
         <Footer/>
        
    </ContainerTripPage>
  );
}

export default CreateTripPage;
