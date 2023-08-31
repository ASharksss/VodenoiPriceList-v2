import React from 'react';
import {NavLink} from "react-router-dom";

const HistoryOrder = ({orders}) => {
    return (
        <div className='history_order shadow'>
            <h1 className='history_order-title'>Ваши Заказы</h1>
            {orders.length <= 0 ? <p>Заказов ещё не было</p> :
                orders.map(item => (
                    <NavLink key={item} to={'/detailOrder/' + item.id} state={{id: item.id}} className='history_order-wrapper'>
                        <div className='history_order-item row'>
                            <p>{item.order_date}</p>
                            <p>{item.count} {parseInt(item.count) === 1 ? "товар" : parseInt(item.count) >= 2 & parseInt(item.count) <= 4 ? "товара" : "товаров"}</p>
                            <p>{item.total_cost}</p>
                            <p>{item.status}</p>
                        </div>
                    </NavLink>
                ))}
        </div>
    );
};

export default HistoryOrder;