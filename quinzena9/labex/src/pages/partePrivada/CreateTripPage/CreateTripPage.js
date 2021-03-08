import React from 'react'
import {useHistory} from 'react-router-dom'
import {ContainerTripPage, MainCreateTripPage} from './styled'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'

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
         <MainCreateTripPage>

         <h2 onClick={goToTripDetailsPage}>Detalhar</h2>
         </MainCreateTripPage>
         <Footer/>
        
    </ContainerTripPage>
  );
}

export default CreateTripPage;
