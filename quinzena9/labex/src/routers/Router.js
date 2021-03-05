import React from 'react'
import HomePage from '../pages/partePublica/HomePage/HomePage'
import CreateTripPage from '../pages/partePrivada/CreateTripPage/CreateTripPage'
import ApplicationFormPage from '../pages/partePublica/ApplicationFormPage/ApplicationFormPage'
import ListTripsPage from '../pages/partePublica/ListTripsPage/ListTripsPage'
import LoginPage from '../pages/partePrivada/LoginPage/LoginPage'
import TripDetailsPage from '../pages/partePrivada/TripDetailsPage/TripDetailsPage'
import ErrorPage from '../pages/partePublica/ErrorPage/ErrorPage'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


function Router() {
  return (
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                   <HomePage />
                </Route>
                <Route exact path="/trips/create">
                   <CreateTripPage />
                </Route>
                <Route exact path="/trips/details">
                   <TripDetailsPage/>
                </Route>
                <Route exact path="/login">
                   <LoginPage />
                </Route>
                <Route exact path="/trips/list">
                   <ListTripsPage/>
                </Route>
                <Route exact path="/application-form">
                   <ApplicationFormPage />
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>             
        </BrowserRouter> 

    </div>
  );
}

export default Router;
