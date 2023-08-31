import React, {useEffect, useState} from 'react';
import Fancybox from "../utils/fancybox";
import {useLocation} from "react-router-dom";
import axios from "axios";
import img from '../../src/asserts/shop.jpg'

const DetailOrder = () => {
    const location = useLocation()
    const [data, setData] = useState([])
    const {state} = location
    const getInfo = async () => {
        const id = window.location.pathname.split('/')[2]
        console.log(id)
        await axios.get('/order/detail/' + id || state.id)
            .then(res => {
                if (res.data.serverStatus === 1){
                    setData(res.data.order)
                }
            })
    }

    useEffect(() => {
        getInfo()
    }, [])

    return (
        <div className='detail_order'>
            <button className='noBtn backBtn' onClick={() => window.history.back()}>Назад</button>
            <div className="shadow space-between detail_order-info">
                <p className='detail_order-sum'>Заказчик: <span className='bold'>{data.organization}</span></p>
                <p className='detail_order-sum'>Дата формирования: <span className='bold'>{data.order_date}</span></p>
                <p className='detail_order-sum'>Общая стоимость заказа: <span className='bold'>{data.total_cost}р</span></p>
                <p className='detail_order-sum'>Статус: <span className='detail_order-status'>{data.status}</span></p>
                <p className='detail_order-sum'>Количество предметов: <span className='bold'>{data.count}</span></p>
            </div>
            <table className='table'>
                <thead>
                <tr>
                    <th>Фото</th>
                    <th>Артикул</th>
                    <th>Длина</th>
                    <th>Вес</th>
                    <th>Цена</th>
                    <th>Количество</th>
                    <th>Стоимость</th>
                </tr>
                </thead>
                <tbody>
                {data.length <= 0 ? <p>Загрузка...</p> : data.orders.map(item => (
                <Fancybox>
                    <tr className='tr_element'>
                        <td className="container_img">
                            <p data-fancybox="gallery"
                               data-src={"https://market.vodenoi.shop" + item.products.photo}
                               data-caption={item.articul}
                               style={{cursor: "pointer"}}>
                                <img className="price_img" width="173" height="117"
                                     src={"https://market.vodenoi.shop" + item.products.photo} alt={item.products.articul}/>
                            </p>
                        </td>
                        <td>{item.products.articul}</td>
                        <td>{item.products.length}мм</td>
                        <td>{item.products.weight}гр</td>
                        <td>{item.products.price}</td>
                        <td>{item.count}</td>
                        <td>{item.cost}</td>
                    </tr>
                </Fancybox>))}
                </tbody>
            </table>
        </div>
    )
        ;
};

export default DetailOrder;