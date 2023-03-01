import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/vodenoi-white-logo.png'

export const Header = ({countBasket}) => {
  return (
    <header>

      <div className="logo">
        <Link to='/' className='logo_name'>
          <img src={logo} alt="" className='logotype'/>
        </Link>
      </div>
      <div className="links">
        <Link to='/'>Главная</Link>
        <Link to='/colors'>Цветовые схемы</Link>
        <Link to='/rrc'>РРЦ</Link>
        <Link to='/contact'>Контакты</Link>
        <Link to='/basket'>Корзина <span>{countBasket}</span></Link>
      </div>

    </header>

  )
}