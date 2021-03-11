import React from 'react'
import {useHistory} from 'react-router-dom'
import {ContainerListTripsPage} from './styled'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import {goToHome, goToForm} from '../../routers/Coordinator'

function ListTripsPage() {

  const history = useHistory()

  return (
    <ContainerListTripsPage>
         <Header redirectPage={()=> goToHome(history)} titleRedirect={"Home"}/>
         <Main>
             <h2 onClick ={()=>goToForm(history)}>Candidatar a Viagem</h2>
         </Main>                
         <Footer/>
         
    </ContainerListTripsPage>
  );
}

export default ListTripsPage;
