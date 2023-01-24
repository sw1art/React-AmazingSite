import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'
import { BsTelegram } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className='py-3 footer-top'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <BsTelegram className='svg-icon'/>
                <h4 className='mb-0'>Подписаться на новости</h4>
              </div>
            </div>
            <div className='col-7'>

            </div>
          </div>
        </div>
      </footer>
      <div className='hr-div'>
        <hr />
      </div>

      <footer className='py-3 footer-medium'></footer>
      <div className='hr-div'>
        <hr />
      </div>
      <footer className='py-4 footer-bottom'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0'>
                &copy; {new Date().getFullYear()} Поддерживается: sw1art
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer