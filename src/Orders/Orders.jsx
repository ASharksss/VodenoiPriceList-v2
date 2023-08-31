import React from 'react';
import {NavLink} from "react-router-dom";
import './orders.css'

const Orders = () => {
  return (
    <div className=''>
      <h1>Заказы</h1>
        <div className="orders">
            <NavLink className='history_order-wrapper'>
                <div className='history_order-item row'>
                    <p>29.08.23</p>
                    <p>38 товаров</p>
                    <p>37900</p>
                    <p>Отправлен</p>
                </div>
            </NavLink>
        </div>

    </div>
  );
};

export default Orders;