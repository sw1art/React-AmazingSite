import React from 'react'
import './footer.css'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch, BsTelegram } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className='py-4 footer-top'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-5 align-items-center'>
              <div className='footer-top-data d-flex gap-30 align-items-center pb-0 pt-0'>
                <BsTelegram className='svg-icon p-0' alt='Телеграмм'/>
                <h4 className='mb-0'>Подпишись на новости!</h4>
              </div>
            </div>
            <div className='col-7'>
            <div className="input-group">
                <input type="text" className="form-control p-2" placeholder="Введи свой email..."
                  aria-label="Введи свой email..." aria-describedby="button-addon2" />
                <button className='input-group-text hover-background p-2'>
                  <BsSearch className='fs-6' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <div className='hr-div'>
        <hr />
      </div>

      <footer className='py-3 footer-medium'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <h5 className='mb-3'>Контакты</h5>
              <div>
                <address className='py-2 mb-1' href='/'>
                Россия, <br/>
                г.Москва, ул.Арбат,<br/>
                д.777
                </address>
                <text className='py-2 mb-1'>Телефон горячей линии:</text>
                <br/>
                <a className='text-white hover-text-white py-2 mb-1' href='tel: +7900000000'>+7900000000</a>
                <br/>
                <text className='py-2 mb-1'>Email:</text>
                <br/>
                <a className='text-white hover-text-white py-2 mb-1' href='mailto: sw1art@gmail.com'>sw1art@gmail.com</a>
              </div>
            </div>
            <div className='col-3'>
              <h5 className='mb-4'>Компания</h5>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white hover-text-white py-2 mb-1'>Блог</Link>
                <Link className='text-white hover-text-white py-2 mb-1'>Политика конфидециальности</Link>
                <Link className='text-white hover-text-white py-2 mb-1'>Политика возрата</Link>
                <Link className='text-white hover-text-white py-2 mb-1'>Потика доставки</Link>
                <Link className='text-white hover-text-white py-2 mb-1'>Сроки и условия</Link>
              </div>
            </div>
            <div className='col-3'>
              <h5 className='mb-4'>Покупателям</h5>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white hover-text-white py-2 mb-1'>О нас</Link>
                <Link className='text-white hover-text-white py-2 mb-1'>Часто задоваемые вопросы</Link>
                <Link className='text-white hover-text-white py-2 mb-1'>Контакты</Link>
                <Link className='text-white hover-text-white py-2 mb-1'>Доставка</Link>
              </div>
            </div>
            <div className='col-3'>
              <h5 className='mb-4'>Категории</h5>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white hover-text-white py-2 mb-1'>Ноутбуки</Link>
                <Link className='text-white hover-text-white py-2 mb-1'>Смартфоны</Link>
                <Link className='text-white hover-text-white py-2 mb-1'>Клавиатуры</Link>
                <Link className='text-white hover-text-white py-2 mb-1'>Аксессуары</Link>
              </div>
            </div>
          </div>
        </div>

      </footer>

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