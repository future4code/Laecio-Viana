import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {ContainerTripDetailsPage, ContainerTrips, ItemTrip} from './styled'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import {logout} from '../../routers/Coordinator'
import useProtectedPage from '../../hooks/useProtectedPage'
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'


function TripDetailsPage() {
  const history = useHistory()
  const[trips, setTrips] = useState([])  

  useEffect(()=>{
    axios.get(`${BASE_URL}/trips`).then((response)=>{
            setTrips(response.data.trips)
        }).catch((error)=>{
            alert(error)
        })
  },[])  
  useProtectedPage()

  return (
    <ContainerTripDetailsPage> 
       <Header redirectPage={()=>logout(history)} titleRedirect={"Logout"}/>  
       <Main>
            <h2>Lista Viagens</h2>
            <ContainerTrips>
              
                {trips.map((trip)=>{
                  return <ItemTrip>
                              <p>Nome</p>
                              <p>{trip.name}</p>
                              <button>Detalhar Viagem</button>
                          </ItemTrip>
                })}
            </ContainerTrips>
       </Main>
       <Footer/>      
    </ContainerTripDetailsPage>
  );
}

export default TripDetailsPage;
