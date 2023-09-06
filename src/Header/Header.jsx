import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/vodenoi-dark-logo.png'
import Menu from "../Menu/Menu";
import {SlBasket} from 'react-icons/sl';

export const Header = ({countBasket, isAuth, role, status}) => {
  return (

      <header>
        <div className="header_wrapper">
          <Menu isAuth={isAuth} role={role} status={status} countBasket={countBasket}/>
          <div className="logo">
            <Link to='/' className='logo_name'>
              <img src={logo} alt="" className='logotype'/>
            </Link>
          </div>

        </div>


      </header>



  )
}