import React from 'react'
import HomePage from './components/HomePage/HomePage'
import CreateTripPage from './components/CreateTripPage/CreateTripPage'
import ApplicationFormPage from './components/ApplicationFormPage/ApplicationFormPage'
import ListTripsPage from './components/ListTripsPage/ListTripsPage'
import LoginPage from './components/LoginPage/LoginPage'
import Router from './components/Router/Router'
import TripDetailsPage from './components/TripDetailsPage/TripDetailsPage'

function App() {
  return (
    <div>
        <HomePage/>
        <CreateTripPage/>
        <TripDetailsPage/>
        <LoginPage/>
        <Router/>
        <ListTripsPage/>
        <ApplicationFormPage/>

    </div>
  );
}

export default App;
