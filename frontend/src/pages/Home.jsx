import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row m-0'>
          <div className='d-flex flex-wrap justify-content-between align-items-center'>
            <div className='col-6'>
              <div className='main-banner-content p-3 position-relative'>
                <img src={require('../images/banners/MSI_GT77_HX_13V.jpg')}
                  alt='главный баннер' className='img-field rounded-2' />
                {/* <div className='main-banner-content position-absolute'>
                  <h4>Восхождение легенды!</h4>
                  <h5>MSI GT77 HX 13V</h5>
                </div> */}
                <div className='main-banner-button-price p-6 position-absolute'>
                  <Link href='/' type='button' className='btn btn-outline-secondary'>Купить сейчас!</Link>
                  <p className='m-0'>305.990₽</p>
                </div>
              </div>
            </div>
            <div className='col-6'>
            <div className='flex-wrap justify-content-between align-items-center'>
              <div className='main-banner-content p-3 position-relative'>
                <img src={require('../images/banners/iphone14.jpg')}
                  alt='главный баннер' className='img-field rounded-2' />
                {/* <div className='small-banner-content position-absolute'>
                  <h4>Восхождение легенды!</h4>
                  <h5>MSI GT77 HX 13V</h5>
                </div> */}
                <div className='main-banner-button-price position-absolute'>
                  <Link href='/' type='button' className='btn btn-outline-secondary'>Купить сейчас!</Link>
                  <p className='m-0'>77.990₽</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home