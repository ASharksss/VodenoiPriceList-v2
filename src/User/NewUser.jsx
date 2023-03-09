import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const NewUser = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [fio, setFIO] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [organization, setOrganization] = useState('')

  const handleSubmit = () => {
    const data = {
      username: username,
      password: password,
      email: email,
      fio: fio,
      number: number,
      organization: organization
    }
    axios.post('/auth/registration', data)
      .then(res => {
        if (res.data.serverStatus == 1) {
          alert(res.data.message)
          navigate('/user/list')
        } else {
          console.log(res)
        }
      }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className='container'>
      <div className="registration">
        <h1>Регистрация пользователя</h1>
        <form className='registration_form'
              onSubmit={e => {
                e.preventDefault()
                handleSubmit()
              }}>
          <input type="text" onChange={e => setUsername(e.target.value)} placeholder='Логин'/>
          <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Пароль"/>
          <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Почта"/>
          <input type="text" onChange={e => setNumber(e.target.value)} placeholder="Номер"/>
          <input type="text" onChange={e => setFIO(e.target.value)} placeholder="ФИО"/>
          <input type="text" onChange={e => setOrganization(e.target.value)} placeholder="Организация"/>
          <button type="submit" className='reg_btn'>Создать</button>
        </form>
      </div>

    </div>
  )
}