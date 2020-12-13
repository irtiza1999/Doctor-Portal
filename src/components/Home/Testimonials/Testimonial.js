import React from 'react'
import './Testimonials.css'
const Testimonial = (props) => {
  const { quote, name, from, img } = props.testimonial
  return (
    <div>
      <div className='card shadow-sm justify-content-center'>
        <div className='card-body'>
          <p className='card-text text-center'>{quote}</p>
        </div>
        <div className='card-footer d-flex  align-items-center'>
          <img className='mx-3' src={img} alt='' width='60' />
          <div>
            <h6 className='text-brand'>{name}</h6>
            <p className='m-0'>{from}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
