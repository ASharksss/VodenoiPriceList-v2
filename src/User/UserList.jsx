import React, {useEffect, useState} from 'react'
import './user.css'
import {Link, NavLink} from 'react-router-dom'
import {Sidebar} from "../Sidebar/Sidebar";
import axios from "axios";


export const UserList = () => {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')


  useEffect(() => {
    axios.get('/auth/user/list')
      .then(res => {
        if (res.data.serverStatus == 1) {
          setUsers(res.data.users)
        }
      })
  }, [])

  const handleBlockUser = (username) => {
    axios.post('/auth/block', {username: username})
      .then(res => {
        if (res.data.serverStatus == 1) {
          setUsers(res.data.users)
        }
      })
  }

  const handleUnblockUser = (username) => {
    axios.post('/auth/unblock', {username: username})
      .then(res => {
        if (res.data.serverStatus == 1) {
          setUsers(res.data.users)
        }
      })
  }

  let resultSearch = users.filter(item => item.fio.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="main" style={{display: 'initial'}}>
      <div style={{width: '100px', margin: '0 10px'}}>
        <button className="create_user">
          <Link style={{color: "black", textDecoration: "none"}} to='/create'>Создать</Link>
        </button>
      </div>


      <input type="text" placeholder='Поиск' className='users_search shadow'
             onChange={e => setSearch(e.target.value)}
      />


      <div className="user_wrapper">
        {
          users.length > 0 && resultSearch.map(item => (
            <div className="user_block shadow" key={item.id}>
              <div className="user_block-info">
                <p>ФИО: <span className='user_block-text'>{item.fio}</span></p>
                <p>Логин: <span className='user_block-text'>{item.username}</span></p>
                <p>Почта: <span className='user_block-text'>{item.email}</span></p>
                <p>Номер: <span className='user_block-text'>{item.number}</span></p>
                <p>Организация: <span className='user_block-text'>{item.organization}</span></p>
              </div>
              <div className="user_block-btns">

                <NavLink to={'/profile/' + item.id}>
                  <button className="user_block-btn">Подробнее</button>
                </NavLink>

                {item.disabled ?
                  <button className="user_block-btn"
                          onClick={() => handleUnblockUser(item.username)}
                  >Разблокировать</button> :
                  <button className="user_block-btn"
                          onClick={() => handleBlockUser(item.username)}
                  >Заблокировать</button>
                }

              </div>
            </div>
          ))
        }
      </div>




    </div>
  )
}