import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import {ContainerListTripsPage, ContainerTrips , ItemTrip} from './styled'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import {goToHome, goToForm} from '../../routers/Coordinator'
import {BASE_URL} from '../../constants/urls'
import axios from 'axios'

function ListTripsPage() {
  const[trips, setTrips] = useState([])
  const history = useHistory()

  useEffect(()=>{
      axios.get(`${BASE_URL}/trips`).then((response)=>{
          setTrips(response.data.trips)
      }).catch((error)=>{
          alert(error)
      })
  },[])  

  return (
    <ContainerListTripsPage>
         <Header redirectPage={()=> goToHome(history)} titleRedirect={"Home"}/>
         <Main>
             <h1>Lista de Viagens Disponíveis</h1>
             <h2 onClick ={()=>goToForm(history)}>Candidatar a Viagem</h2>
             <ContainerTrips>
                 <p>Nome</p>
                 <p>Data</p>
                 <p>Planeta</p>
                 <p>Duração</p>
                 <p>Descrição</p>                 
             </ContainerTrips>
             {trips.map((trip)=>{
                  return <ItemTrip>
                            <p>{trip.name}</p>
                            <p>{trip.date}</p>
                            <p>{trip.planet}</p>
                            <p>{trip.durationInDays}</p>
                            <p>{trip.description}</p>                            
                        </ItemTrip>
              })}

             {/* <h2 onClick ={()=>goToForm(history)}>Candidatar a Viagem</h2> */}
         </Main>                
         <Footer/>
         
    </ContainerListTripsPage>
  );
}

export default ListTripsPage;
