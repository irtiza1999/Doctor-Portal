import React, { useContext, useEffect, useState } from 'react'
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate'
import Sidebar from '../Sidebar/Sidebar'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { UserContext } from '../../../App'

const containerStyle = {
  position: 'absolute',
  right: 0,
  background: '#F4FDFB',
  height: '100%',
}

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [appointments, setAppointments] = useState([])
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const handleDateChange = (date) => {
    setSelectedDate(date)
  }
  useEffect(() => {
    fetch('https://infinite-sea-01254.herokuapp.com/appointmentsByDate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: selectedDate, email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data)
      })
  }, [selectedDate])
  return (
    <section>
      <div style={containerStyle} className='container-fluid row'>
        <div className='col-md-2 col-sm-6 col-12'>
          <h1>
            <Sidebar></Sidebar>
          </h1>
        </div>
        <div className='col-md-5 col-sm-12 col-12 d-flex justify-content-center'>
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className='col-md-5 col-sm-12 col-12'>
          <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
