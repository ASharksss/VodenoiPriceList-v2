import React from 'react';
import Fancybox from "../utils/fancybox";
import img from '../../src/asserts/shop.jpg'

const DetailOrder = () => {
  return (
    <div className='detail_order'>
      <button className='noBtn backBtn' onClick={() => window.history.back()}>Назад</button>
      <div className="shadow space-between detail_order-info">
          <p className='detail_order-sum'>Заказчик: <span className='bold'>Название</span></p>
          <p className='detail_order-sum'>Дата формирования: <span className='bold'>28.08.23</span></p>
          <p className='detail_order-sum'>Общая стоимость заказа: <span className='bold'>580р</span></p>
          <p className='detail_order-sum'>Статус: <span className='detail_order-status'>Отправлен</span></p>
          <p className='detail_order-sum'>Количество предметов: <span className='bold'>2</span></p>
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
        <Fancybox>
          <tr className='tr_element'>
            <td className="container_img">
              <p>
                <img src={img} alt="" className="price_img"/>
              </p>
            </td>
            <td>RKL6017/RKL17-64</td>
            <td>60мм</td>
            <td>16гр</td>
            <td>290</td>
            <td>2</td>
            <td>580</td>
          </tr>
        </Fancybox>
        </tbody>
      </table>
    </div>
  )
    ;
};

export default DetailOrder;