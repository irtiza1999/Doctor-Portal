import React, { useEffect, useState } from 'react'
import Doctor from '../Doctor/Doctor'
const Doctors = () => {
  const [doctors, setDoctors] = useState([])
  useEffect(() => {
    fetch('https://infinite-sea-01254.herokuapp.com/doctors')
      .then((res) => res.json())
      .then((data) => setDoctors(data))
  }, [])
  return (
    <section className='doctors'>
      <div className='container'>
        <h5 className='text-center  text-brand mb-5'>Our Doctors</h5>
        <div className='row'>
          {doctors.map((doctor) => (
            <Doctor key={doctor._id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Doctors
