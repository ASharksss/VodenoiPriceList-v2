import React, {useEffect, useState} from 'react';
import ProfileCard from "./ProfileCard";
import './Profile.css'
import HistoryOrder from "./HistoryOrder";
import axios from "axios";

const Profile = () => {
    const [user, setUser] = useState([])
    const [orders, setOrders] = useState([])

    const getUserInfo = async () => {
        const id = window.location.pathname.split('/')[2]
        if (id !== undefined) {
            axios.get('/auth/user/info/' + id, {
                headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
            }).then(res => {
                if (res.data.serverStatus === 1) {
                    setUser(res.data.user)
                    setOrders(res.data.orders)
                }
            })
        } else {
            axios.get('/auth/user/info', {
                headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
            }).then(res => {
                if (res.data.serverStatus === 1) {
                    setUser(res.data.user)
                    setOrders(res.data.orders)
                }
            })
        }
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <div className='profile_wrapper'>
            <button className='noBtn backBtn' onClick={() => window.history.back()}>Назад</button>
            <ProfileCard user={user}/>
            <HistoryOrder orders={orders}/>
        </div>
    );
};

export default Profile;