import React,{useState, useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import {ContainerTripDetailsPage, ContainerTrips, ItemTrip, Trip} from './styled'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import {logout, showTripDetails} from '../../routers/Coordinator'
import useProtectedPage from '../../hooks/useProtectedPage'
import axios from 'axios'
import {BASE_URL, header} from '../../constants/urls'

function TripDetailsPage() {
  const history = useHistory()
  const[trips, setTrips] = useState([])  
  const[travel, setTravel] = useState({})  
  const pathParams = useParams()
  const token = localStorage.getItem('token')
 

  useEffect(()=>{
    axios.get(`${BASE_URL}/trips`).then((response)=>{
           setTrips(response.data.trips)          
        }).catch((error)=>{
            alert(error)
        })
  },[])   

  const showTrip = (idTravel) =>{     
        showTripDetails(history, idTravel)         
         
  }  
   
  useEffect(()=>{

    axios.get(`${BASE_URL}/trip/${pathParams.idTrip}`, header(token)).then((response)=>{
          setTravel(response.data.trip)     
         
    }).catch((error)=>{
      alert(error)
    })   
  },[pathParams.idTrip, token]) 

  
  useProtectedPage()

  return (
    <ContainerTripDetailsPage> 
       <Header redirectPage={()=>logout(history)} titleRedirect={"Logout"}/>  
       <Main>
            <h2>Lista Viagens</h2>
            <ContainerTrips>              
                {trips.map((trip)=>{
                  return <ItemTrip key={trip.id}>
                              <p>Nome</p>
                              <p>{trip.name}</p>
                              <button onClick={()=>showTrip(trip.id) }>Detalhar Viagem</button> 
                              {travel.id === trip.id? 
                                      <Trip>
                                        <p>Nome {travel.name}</p>
                                        <p>planeta {travel.planet} </p>
                                        <p>descrição {travel.description}</p>
                                        <p>data {travel.date}</p>
                                        <p>duração dias {travel.durationInDays}</p>
                                        <h3>Candidatos </h3>
                                        {travel.candidates.map((trip)=>{
                                           return (
                                                <div>                                                    
                                                   <p>nome {trip.name}</p>
                                                   <p>idade {trip.age}</p>
                                                   <p>país {trip.country}</p>
                                                   <p>profissão {trip.profession}</p>
                                                   <p>explicação {trip.applicationText}</p>
                                                   <button>Aprovar</button>
                                                </div>
                                           )
                                        })}
                                        <h3>Aprovados</h3>
                                        {travel.approved.map((trip)=>{
                                             return (
                                              <div>                                                    
                                                 <p>nome {trip.name}</p>
                                                 <p>idade {trip.age}</p>
                                                 <p>país {trip.country}</p>
                                                 <p>profissão {trip.profession}</p>                                          
                                                 
                                              </div>
                                         )
                                        })}                                       
                                        
                                      </Trip> 
                                   : <div></div>   }                                                      
                                                                                     
                          </ItemTrip>
                })}
            </ContainerTrips>
       </Main>
       <Footer/>      
    </ContainerTripDetailsPage>
  );
}

export default TripDetailsPage;
