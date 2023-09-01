import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import './orders.css'

const Orders = () => {

    const [selected, setSelected] = useState(1)
    const [data, setData] = useState([])

    const getOrderList = async () => {
        await axios.get('/order/list/' + selected)
            .then(res => {
                if (res.data.serverStatus === 1) {
                    setData(res.data.orders)
                }
            })
    }

    const changeStatus = (id) => {
        let status_id = 2
        switch (selected) {
            case '1':
                status_id = 2
                break;
            case '2':
                status_id = 3
                break;
            default:
                break
        }
        axios.post(`/order/change/${id}`, {status_id: status_id})
            .then(res => {
                if (res.data.serverStatus === 1){
                    alert('Статус изменен')
                    getOrderList()
                } else {
                    alert('Ошибка обработки данных')
                }
            }).catch(err => {
                console.log(err)
                alert('Ошибка обработки данных')
        })
    }

    useEffect(() => {
        getOrderList()
    }, [selected])

    return (
        <div className='orders_wrapper'>
            <h1>Заказы</h1>
            <select onChange={e => setSelected(e.target.value)} className='orders_select'>
                <option value='1'>Новые</option>
                <option value='2'>В работе</option>
                <option value='3'>Завершен</option>
            </select>
            <div className="orders row">
                {data.length <= 0 ? <p>Заказов пока нет</p> : data.map(item => (
                    <div className='row' key={item.id}>
                        <NavLink to={'/detailOrder/' + item.id} className='history_order-wrapper'>
                            <div className='order-item row'>
                                <p>{item.organization}</p>
                                <p>{item.order_date}</p>
                                <p>{item.count} {parseInt(item.count) === 1 ? "товар" : parseInt(item.count) >= 2 & parseInt(item.count) <= 4 ? "товара" : "товаров"}</p>
                                <p>{item.total_cost}</p>
                                <p>{item.status}</p>
                            </div>
                        </NavLink>
                        {selected === '3' ? '' :
                          <button className='order_btn' onClick={() => changeStatus(item.id)}>
                            {
                              selected == '2' ? <span>Завершить</span> : <span>Принять</span>
                            }

                        </button>}
                    </div>))}
            </div>

        </div>
    );
};

export default Orders;