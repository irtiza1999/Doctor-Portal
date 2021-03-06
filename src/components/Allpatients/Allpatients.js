import React, { useEffect, useState } from 'react'

import AppointmentDataTable from '../Dashboard/AppointmentDataTable/AppointmentDataTable'
import Sidebar from '../Dashboard/Sidebar/Sidebar'

const Allpatients = () => {
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    fetch('https://infinite-sea-01254.herokuapp.com/appointments')
      .then((res) => res.json())
      .then((data) => setAppointments(data))
  }, [])

  return (
    <div className='container-fluid row'>
      <Sidebar></Sidebar>
      <div
        className='col-md-10 p-4 pr-5'
        style={{ position: 'absolute', right: -13, backgroundColor: '#F4FDFB' }}
      >
        <h5 className='text-brand'>All Patients</h5>
        <AppointmentDataTable appointments={appointments} />
      </div>
    </div>
  )
}

export default Allpatients
