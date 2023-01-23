import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch, BsArrowDownUp, BsSuitHeartFill, BsPersonFill, BsFillCartFill } from 'react-icons/bs'

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Бесплатная доставка от 5000руб.</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>Телефон горячей линии:
                <a className='text-white' href='tel : +7900000000'>+7900000000</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-3'>
              <h1>
                <Link className='text-white'>AmazingShop</Link>
              </h1>
            </div>
            <div className='col-4'>
              <div class="input-group">
                <input type="text" class="form-control py-3" placeholder="Поиск..."
                  aria-label="Поиск..." aria-describedby="button-addon2" />
                <span className='input-group-text p-3'>
                  <BsSearch className='fs-6' />
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link className='dropdown-item text-white'>
                    <div>
                      <BsArrowDownUp className='header-upper-svg' alt='Сравнить товары' />
                      <p className=''>Сравнить<br />товары</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link className='dropdown-item text-white'>
                    <div>
                      <BsSuitHeartFill className='header-upper-svg' alt='Избранное' />
                    </div>
                    <p className=''>Избранное</p>
                  </Link>
                </div>
                <div>
                  <Link className='dropdown-item text-white'>
                    <div>
                      <BsPersonFill className='header-upper-svg' alt='Мой акаунт' />
                    </div>
                    <p className=''>Избранное</p>
                  </Link>
                </div>
                <div>
                  <Link className='dropdown-item text-white'>
                    <div>
                      <BsFillCartFill className='header-upper-svg' alt='Корзина' />
                    </div>
                    <p className=''>Корзина</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </div>
      </header>
    </>
  )
}

export default Header