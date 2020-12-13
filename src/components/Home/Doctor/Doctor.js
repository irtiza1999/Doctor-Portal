import React from 'react'
import img from '../../../images/doctor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
const Doctor = ({ doctor }) => {
  return (
    <div className='col-md-4 text-center'>
      {doctor.image ? (
        <img
          style={{ height: '300px' }}
          src={`data:image/png;base64,${doctor.image.img}`}
        />
      ) : (
        <img
          style={{ height: '300px' }}
          className='img-fluid mb-3'
          src={img}
          alt=''
        />
      )}
      {doctor.name ? <h4>{doctor.name}</h4> : <h4>Dr. Lesscort</h4>}
      {doctor.contact ? (
        <p>
          <FontAwesomeIcon className='text-brand' icon={faPhoneAlt} />
          {doctor.contact}
        </p>
      ) : (
        <p>
          <FontAwesomeIcon className='text-brand' icon={faPhoneAlt} />
          +9988774455
        </p>
      )}
    </div>
  )
}

export default Doctor
