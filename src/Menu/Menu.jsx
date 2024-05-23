import React, {useEffect, useState, useRef} from 'react';
import './menu.css'
import {NavLink} from "react-router-dom";
const Menu = ({countBasket, isAuth, role, status, toggle, setToggle, hideSidebar}) => {
  const sidebarRef = useRef(null)
  const handleClickLink = () => {
    hideSidebar()
    let btn = document.querySelector('.menu__btn')
    btn.click()
  }

  const handleExit = () => {
    localStorage.clear()
    window.location.href = window.location.origin
  }

  return (
    <div className="hamburger-menu" ref={sidebarRef}>

      <input id="menu__toggle" type="checkbox" value={toggle} onChange={() => setToggle(!toggle)}/>
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>


      <ul className="menu__box">
        <div className="menu__box-container">
          <NavLink to='/' className='noLink menu__item-btn menu__item' onClick={() => handleClickLink()}>
            Главная
          </NavLink>
          <NavLink to='/colors' className='noLink menu__item-btn menu__item' onClick={() => handleClickLink()}>
            Цветовые схемы
          </NavLink>
          <NavLink to='/rrc' className='noLink menu__item-btn menu__item' onClick={() => handleClickLink()}>
            Рекомендуемые розничные цены
          </NavLink>
          <NavLink to='/contact' className='noLink menu__item-btn menu__item' onClick={() => handleClickLink()}>
            Контакты
          </NavLink>

          {isAuth ?
            <>
              {role === 'admin' ?
                <>
                  <NavLink to='/user/list' className='noLink menu__item-btn menu__item'
                           onClick={() => handleClickLink()}>Пользователи</NavLink>
                  <NavLink to='/orders' className='noLink menu__item-btn menu__item'
                           onClick={() => handleClickLink()}>Заказы {status &&
                    <span className='badge red'>{status}</span>}
                  </NavLink>

                  <NavLink to='/profile' className='noLink menu__item-btn menu__item'
                           onClick={() => handleClickLink()}>Профиль</NavLink>
                  <NavLink to='/basket' className='noLink menu__item-btn menu__item' onClick={() => handleClickLink()}>
                    Корзина {countBasket}
                  </NavLink>
                </> :
                <>
                  <NavLink to='/basket' className='noLink menu__item-btn menu__item' onClick={() => handleClickLink()}>
                    Корзина {countBasket}
                  </NavLink>
                  <NavLink to='/profile' className='noLink menu__item-btn menu__item'
                           onClick={() => handleClickLink()}>Профиль</NavLink>
                </>
              }
              <NavLink to='/#exit' className='noLink menu__item-btn menu__item'
                       onClick={() => handleExit()}>Выйти</NavLink>
            </> :
            <NavLink to='/login' className='noLink menu__item-btn menu__item'
                     onClick={() => handleClickLink()}>Войти</NavLink>
          }
        </div>
      </ul>
    </div>


  );
};

export default Menu;