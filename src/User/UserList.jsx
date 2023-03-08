import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Sidebar} from "../Sidebar/Sidebar";
import axios from "axios";


export const UserList = () => {
    const [users, setUsers] = useState([])
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

    return (
        <div className="main" style={{display: 'initial'}}>
            <div style={{width: '100px', margin: '0 10px'}}>
                <button className="in_basket">
                    <Link style={{color: "white", textDecoration: "none"}} to='/create'>Создать</Link>
                </button>
            </div>
            <table className='table'>
                <thead>
                <tr>
                    <th>ФИО</th>
                    <th>Логин</th>
                    <th>Почта</th>
                    <th>Номер</th>
                    <th>Организация</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {users.length > 0 && users.map(item => (
                        <tr key={item.id}>
                            <td>{item.fio}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.number}</td>
                            <td>{item.organization}</td>
                            <td>{item.disabled ?
                                <button className="in_basket" style={{width: '50%'}}
                                        onClick={() => handleUnblockUser(item.username)}>Разблокировать</button> :
                                <button className="in_basket" style={{width: '50%'}}
                                        onClick={() => handleBlockUser(item.username)}>Заблокировать</button>
                            }</td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        </div>
    )
}