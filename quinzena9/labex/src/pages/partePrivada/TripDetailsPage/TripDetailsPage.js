import React from 'react'
import {useHistory} from 'react-router-dom'
import {ContainerTripDetailsPage} from './styled'
import Header from '../../../components/Header/Header'


function TripDetailsPage() {
  const history = useHistory()

  const goToLoginPage = () =>{
      history.push('/login')
  }
  
  return (
    <ContainerTripDetailsPage> 
       <Header redirectPage={goToLoginPage} titleRedirect={"Logout"}/>        
    </ContainerTripDetailsPage>
  );
}

export default TripDetailsPage;
