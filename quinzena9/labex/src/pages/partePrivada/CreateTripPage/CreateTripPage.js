import React from 'react'
import {useHistory} from 'react-router-dom'
import {ContainerTripPage} from './styled'
import Header from '../../../components/Header/Header'


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
         <button onClick={goToTripDetailsPage}>Detalhar</button>
        
    </ContainerTripPage>
  );
}

export default CreateTripPage;
