import React from 'react'
import {ContainerHomePage, MainHomePage} from './styled'
import {useHistory} from 'react-router-dom'
import Header from  '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
//import Main from '../../../components/Main/Main'

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
         <MainHomePage>           
             <h2 onClick={goToLoginPage}>Login</h2> 
                        
         </MainHomePage>
         <Footer/>        
         
    </ContainerHomePage>
  );
}

export default HomePage;
