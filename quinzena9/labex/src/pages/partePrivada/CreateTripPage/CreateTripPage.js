import React from 'react'
import {useHistory} from 'react-router-dom'
import {ContainerTripPage} from './styled'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Main from '../../../components/Main/Main'
import { goToTripDetailsPage, logout} from '../../../routers/Coordinator'
import useProtectedPage from '../../../hooks/useProtectedPage'


function CreateTripPage() {
  const history = useHistory()
  useProtectedPage()

  return (
    <ContainerTripPage>
         <Header redirectPage={()=>logout(history)} titleRedirect={"Logout"}/>
         <Main>
            <h2 onClick={()=>goToTripDetailsPage(history)}>Detalhar</h2>
         </Main>
         <Footer/>        
    </ContainerTripPage>
  );
}

export default CreateTripPage;
