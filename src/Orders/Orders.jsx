import React from 'react';
import {NavLink} from "react-router-dom";
import './orders.css'

const Orders = () => {
  return (
    <div className='orders_wrapper'>
      <h1>Заказы</h1>
        <select className='orders_select'>
            <option>Новые</option>
            <option>В работе</option>
            <option>Завершен</option>
        </select>
        <div className="orders row">
            <NavLink to='/detailOrder' className='history_order-wrapper'>
                <div className='order-item row'>
                    <p>Заказчик</p>
                    <p>29.08.23</p>
                    <p>38 товаров</p>
                    <p>37900</p>
                    <p>Отправлен</p>
                </div>
            </NavLink>
            <button className='order_btn'>Принять</button>
        </div>

    </div>
  );
};

export default Orders;