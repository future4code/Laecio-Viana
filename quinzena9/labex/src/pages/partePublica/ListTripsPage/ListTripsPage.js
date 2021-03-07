import React from 'react'
import {useHistory} from 'react-router-dom'
import {ContainerListTripsPage} from './styled'
import Header from '../../../components/Header/Header'

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
                
         <button onClick ={goToForm}>Candidatar a Viagem</button>
         
    </ContainerListTripsPage>
  );
}

export default ListTripsPage;
