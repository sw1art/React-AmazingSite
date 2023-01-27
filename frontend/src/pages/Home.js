import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner-content p-3'>
              <img src={require('../images/banners/MSI_GT77_HX_13V.jpg')} 
              alt='главный баннер' className='img-field rounded-2'/>
              <div className='main-banner-content'>
                <h4></h4>
                <h5></h5>
                <p></p>
                <Link>Купить сейчас!</Link>
              </div>
            </div>
          </div>
          <div clasName='col-6'></div>
        </div>
      </div>
    </section>
  )
}

export default Home