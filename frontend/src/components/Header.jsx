import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './header.css'
import { BsSearch, BsArrowDownUp, BsSuitHeartFill, BsPersonFill, BsFillCartFill, BsFillGridFill } from 'react-icons/bs'

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
                <Link className='main-color hover-text-white' to={''}>AmazingShop</Link>
              </h1>
            </div>
            <div className='col-4'>
              <div class="input-group">
                <input type="text" class="form-control py-3" placeholder="Поиск..."
                  aria-label="Поиск..." aria-describedby="button-addon2" />
                <button className='input-group-text hover-background p-3'>
                  <BsSearch className='fs-6' />
                </button>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white' to={''}>
                    <BsArrowDownUp className='header-upper-svg hover-svg-white' alt='Сравнить товары' />
                    <div className='d-flex flex-column gap-10'>
                      <p className='mb-0'>Сравнить<br />товары</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white' to={''}>
                    <div>
                      <BsSuitHeartFill className='header-upper-svg hover-svg-white' alt='Избранное' />
                    </div>
                    <p className='mb-0'>Избранное</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white' to={''}>
                    <div>
                      <BsPersonFill className='header-upper-svg hover-svg-white' alt='Мой акаунт' />
                    </div>
                    <p className='mb-0'>Вход</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white' to={''}>
                    <BsFillCartFill className='header-upper-svg hover-svg-white' alt='Корзина' />
                    <div className='d-flex flex-column gap-10'>
                      <span className='bodge mb-0'>
                        <p className='quantity-product text-center mb-0'>0</p></span>
                      <p className='mb-0'>5000₽</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div className=''>
                  <div className="dropdown">
                    <button 
                    className="btn btn-secondary dropdown-toggle align-items-center gap-15" 
                    type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" 
                    aria-expanded="false">
                      <BsFillGridFill className='header-bottom-svg' />
                      <span className='me-5 d-inline-block p-3'>Каталог</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                      <li><Link className="dropdown-item text-white" to="/">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="/">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="/">Something else here</Link></li>
                      <li><Link className="dropdown-item text-white" to="/">Separated link</Link></li>
                    </ul>
                  </div>
                </div>

                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-30'>
                    <NavLink className='text-white hover-text-white' to='/'>Главная</NavLink>
                    <NavLink className='text-white hover-text-white' to='/'>Товары</NavLink>
                    <NavLink className='text-white hover-text-white' to='/'>Блог</NavLink>
                    <NavLink className='text-white hover-text-white' to='/contact'>Контакты</NavLink>
                  </div>
                </div>
                <div className=''></div>
                <div className=''></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header