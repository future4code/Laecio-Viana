import React from 'react'
import {useHistory} from 'react-router-dom'
import {ContainerTripDetailsPage} from './styled'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Main from '../../../components/Main/Main'
import {logout} from '../../../routers/Coordinator'
import useProtectedPage from '../../../hooks/useProtectedPage'

function TripDetailsPage() {
  const history = useHistory()  
  useProtectedPage()

  return (
    <ContainerTripDetailsPage> 
       <Header redirectPage={()=>logout(history)} titleRedirect={"Logout"}/>  
       <Main>
            <h2>Lista Viagens</h2>
       </Main>
       <Footer/>      
    </ContainerTripDetailsPage>
  );
}

export default TripDetailsPage;
