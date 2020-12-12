import React from 'react'
import doctor from '../../../images/doctor.png'
const MakeAppoinment = () => {
  return (
    <section className='make-appoinment'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 d-none d-md-block'>
            <img src={doctor} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MakeAppoinment
