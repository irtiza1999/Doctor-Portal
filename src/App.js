import React, { createContext, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Appointment from './components/Appointment/Appointment/Appointment'
import Home from './components/Home/Home/Home'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard/Dashboard'
import PrivateRoute from './components/Login/PrivateRoute'
import Allpatients from './components/Allpatients/Allpatients'
import AddDoctor from './components/AddDoctor/AddDoctor'
import NotFound from './components/NotFound/NotFound'
export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path='/appointment'>
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path='/allPatients'>
            <Allpatients></Allpatients>
          </PrivateRoute>
          <Route path='/addDoctor'>
            <AddDoctor></AddDoctor>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
          <Route path='/*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  )
}

export default App
