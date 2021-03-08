import React from 'react'
import {useHistory} from 'react-router-dom'
import {ContainerTripDetailsPage, MainTripDetailsPage} from './styled'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'


function TripDetailsPage() {
  const history = useHistory()

  const goToLoginPage = () =>{
      history.push('/login')
  }
  
  return (
    <ContainerTripDetailsPage> 
       <Header redirectPage={goToLoginPage} titleRedirect={"Logout"}/>  
       <MainTripDetailsPage>
            <h2>Lista Viagens</h2>
       </MainTripDetailsPage>
       <Footer/>      
    </ContainerTripDetailsPage>
  );
}

export default TripDetailsPage;
