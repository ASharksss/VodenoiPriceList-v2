import React from 'react';
import {NavLink} from "react-router-dom";

const HistoryOrder = () => {
  return (
    <div className='history_order shadow'>
      <h1 className='history_order-title'>Ваши Заказы</h1>
      <NavLink to='/detailOrder' className='history_order-wrapper'>
        <div className='history_order-item row'>
          <p>29.08.23</p>
          <p>38 товаров</p>
          <p>37900</p>
          <p>Отправлен</p>
        </div>
      </NavLink>
      <NavLink className='history_order-wrapper'>
        <div className='history_order-item row'>
          <p>29.08.23</p>
          <p>38 товаров</p>
          <p>37900</p>
          <p>Отправлен</p>
        </div>
      </NavLink>
      <NavLink className='history_order-wrapper'>
        <div className='history_order-item row'>
          <p>29.08.23</p>
          <p>38 товаров</p>
          <p>37900</p>
          <p>Отправлен</p>
        </div>
      </NavLink>
    </div>
  );
};

export default HistoryOrder;