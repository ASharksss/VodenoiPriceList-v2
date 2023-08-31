import React, {useState, useEffect} from "react";
import Fancybox from "../utils/fancybox";
import {Link} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";

export const Basket = ({countBasket, setCountBasket, basket, setBasket, setLoopBasket}) => {
  const [price, setPrice] = useState([])
  const [localBasket, setLocalBasket] = useState([])
  const [products, setProducts] = useState([])

  function handleRefresh() {
    const basket = localStorage.getItem('basket')
    const newArr = JSON.parse(basket)
    setLoopBasket(Object.keys(newArr).length)
    setLocalBasket(JSON.parse(basket))
  }

  useEffect(() => {
    axios.post('/basket', {order: countBasket}).then(response => {
      setProducts(response.data.products)
    })
    document.title = 'Корзина'
  }, [])

  const notify = (name) => toast.error(name + " удален с корзины!");

  useEffect(() => {
    let basket = localStorage.getItem('basket')
    let shopBasket
    let newArr = []
    let sum = 0
    if (basket) {
      let shopBasket = JSON.parse(basket)
      products.map(item => {
        for (const [key, value] of Object.entries(shopBasket)) {
          if (key.split('_id')[1] == item.id) {
            newArr.push(item)
            sum += item.price * value
          }
        }
      })
      setPrice(sum)
      setBasket(newArr)
      setCountBasket(Object.entries(shopBasket))
    }
  }, [products, localBasket])

  function removeProduct(id, name) {
    const basket = localStorage.getItem('basket')
    const newArr = JSON.parse(basket)
    delete newArr['_id' + id]
    localStorage.setItem('basket', JSON.stringify(newArr))
    notify(name)
    handleRefresh()
  }

  function handleChange(id, val) {
    let basket = localStorage.getItem('basket')
    basket = JSON.parse(basket)
    for (const [key, value] of Object.entries(basket)) {
      if (key.split('_id')[1] == id) {
        basket['_id' + id] = parseInt(val)
      }
    }
    localStorage.setItem('basket', JSON.stringify(basket))
    let length = Object.keys(basket).length;
    setLoopBasket(length)
    handleRefresh()
  }

  if (basket.length == 0) {
    return <div className="add_something">
      Добавьте что-нибудь
    </div>
  }

  return (
    <div className="basket">
      <div className="titles">
        <h1>Ваши покупки <i>(возможны скидки)</i></h1>
        <h2>Не забудьте указать количество предметов</h2>
      </div>

      <div className="order_button">
        <h2 className="end_count"> Общая стоимость заказа: {price}р</h2>
        <Link to='/order'>
          <button>Оформить заказ</button>
        </Link>
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
          <th>Кнопки</th>
        </tr>
        </thead>
        <tbody>
        <Fancybox>
          {basket && basket.map(item => (
            <tr key={item.id} className='tr_element'>
              <td className="container_img">
                <p data-fancybox="gallery"
                   data-src={"https://market.vodenoi.shop" + item.photo}
                   data-caption={item.articul}
                   style={{cursor: "pointer"}}>
                  <img className="price_img" width="173" height="117"
                       src={"https://market.vodenoi.shop" + item.photo} alt={item.articul}/>
                </p>
              </td>
              <td>{item.articul}</td>
              <td><p>{item.length}мм</p></td>
              <td><p>{item.weight}г</p></td>
              <td><p>{item.price}</p></td>
              {countBasket && countBasket.map(count => {
                if (count[0].split('_id')[1] == item.id) {
                  return (
                    <>
                      <td key={count[0]}>
                        <input onChange={e => handleChange(item.id, e.target.value)}
                               type="number" value={count[1]}
                               className='input_count'/>
                      </td>
                      <td key={item.price * count[1]}>{item.price * count[1]}</td>
                    </>
                  )
                }
              })}
              <td>
                <button onClick={() => removeProduct(item.id, item.articul)}
                        className="in_basket delete_button">
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </Fancybox>
        </tbody>
      </table>


    </div>
  )
}