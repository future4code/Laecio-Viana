import React from 'react'
import {useHistory} from 'react-router-dom'
import {ContainerListTripsPage, MainListTripsPage} from './styled'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'


function ListTripsPage() {
  const history = useHistory()

  const goToHome = () =>{
        history.push('/')
  }

  const goToForm = () =>{
        history.push('/application-form')
  }
  return (
    <ContainerListTripsPage>
         <Header redirectPage={goToHome} titleRedirect={"Home"}/>
         <MainListTripsPage>
             <h2 onClick ={goToForm}>Candidatar a Viagem</h2>
         </MainListTripsPage>
                
         <Footer/>
         
    </ContainerListTripsPage>
  );
}

export default ListTripsPage;
