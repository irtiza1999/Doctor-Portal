import React from 'react'
import feature from '../../../images/feature.png'
const FeaturedServices = () => {
  return (
    <section className='feature-service pb-0 pb-md-5 my-5'>
      <div className='container mb-5'>
        <div className='row mb-5'>
          <div className='col-md-5 mb-4 m-md-0'>
            <img className='img-fluid' src={feature} alt='' />
          </div>
          <div className='col-md-7 align-self-center'>
            <h1 className='text-brand'>Exception Dental Care, on your term</h1>
            <p className='text-secondary my-5'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              voluptate delectus deserunt, quae libero facilis, illum quaerat
              est perferendis doloremque sed ab et, corrupti aperiam. Nemo unde
              ipsum odio necessitatibus?
            </p>
            <button className='btn btn-brand'>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedServices
