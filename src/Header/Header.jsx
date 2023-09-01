import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/vodenoi-dark-logo.png'
import Menu from "../Menu/Menu";
import {SlBasket} from 'react-icons/sl';

export const Header = ({countBasket, isAuth, role, status}) => {
  return (

      <header>
        <div className="header_wrapper">
          <Menu isAuth={isAuth} role={role} status={status}/>
          <div className="logo">
            <Link to='/' className='logo_name'>
              <img src={logo} alt="" className='logotype'/>
            </Link>
          </div>
          <div className="links">


            {isAuth ?
              <div className='row items-center'>
                <div className='row items-center'>
                  <Link to='/basket' className='noLink'>
                    <SlBasket size={20}/>
                    <span className='countBasket'>{countBasket}</span>
                  </Link>
                </div>
                <Link to='/profile' className='noLink'>Профиль</Link>

              </div> : ''
            }
          </div>
        </div>


      </header>



  )
}