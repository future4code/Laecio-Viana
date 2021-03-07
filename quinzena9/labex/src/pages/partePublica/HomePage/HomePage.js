import React from 'react'
import {ContainerHomePage} from './styled'
import {useHistory} from 'react-router-dom'
import Header from  '../../../components/Header/Header'

function HomePage() {

  const history = useHistory()

  const goToLoginPage = () =>{
        history.push('/login')
  }

  const goToListTripsPage = () =>{
        history.push('/trips/list')
  }
 
  return (
    <ContainerHomePage> 
         <Header redirectPage={goToListTripsPage} titleRedirect={"Usuário"}/>               
            
         <h2 onClick={goToLoginPage}>Login</h2>             
         
    </ContainerHomePage>
  );
}

export default HomePage;
