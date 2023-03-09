import React, {useEffect, useState} from "react";
import {Link, NavLink} from 'react-router-dom'
import Fancybox from "../utils/fancybox";
import {Sidebar} from "../Sidebar/Sidebar";
import {ScrollUp} from "../ScrollUp/ScrollUp";
import axios from "axios";

export const PriceList = ({categories, products, setProducts, handleBasket, setCatName, isAuth}) => {

  const [count, setCount] = useState(1)
  const [load, setLoad] = useState(false)
  const [show, setShow] = useState(true)
  const [message, setMessage] = useState('Выберите категорию')
  const [cId, setCId] = useState(1)

  useEffect(() => {
    document.title = 'VODENOI | Список товаров'
  }, [])

  function handleGetProducts() {
    setLoad(prevState => !prevState)
    axios.get('/category/' + cId + '/' + count).then(response => {
      setProducts(current => [...current, ...response.data.products])
      setLoad(prevState => !prevState)
      if (!response.data.nextPage) {
        setShow(false)
      }
    })
    setCount(prevState => prevState + 1)
  }

  return (

    <div className="main">
      <Sidebar fish={categories} setFish={setProducts} setCatName={setCatName} setShow={setShow}
               setCount={setCount}
               setCId={setCId} setMessage={setMessage}/>
      {message ? <div className="priceList"><h1>{message}</h1></div> :
        <div className="priceList">
          {products.length > 0 ? <ScrollUp/> : ""}
          <table className='table'>
            {products.length > 0 ? <thead>
              <tr>
                <th>Фото</th>
                <th>Артикул</th>
                <th>Длина</th>
                <th>Вес</th>
                {isAuth && <th>Стоимость</th>}
                <th></th>
              </tr>
              </thead> :
              <div className="none_text">
                <p>Грузим :)</p>
              </div>
            }
            <tbody>
            <Fancybox>
              {products.length > 0 ? products.map(item => {
                return (
                  <tr key={item.id}>
                    <td className="container_img">
                      <span data-fancybox="gallery"
                            data-src={"https://market.vodenoi.shop" + item.photo}
                            data-caption={item.articul}
                            style={{cursor: "pointer"}}>
                        <img loading="lazy" className="price_img" width="173" height="117"
                             src={"https://market.vodenoi.shop" + item.photo} alt={item.articul}/>
                      </span>
                    </td>
                    <td>{item.articul}</td>
                    <td><p>{item.length}мм</p></td>
                    <td><p>{item.weight}г/мл</p></td>
                    {isAuth && <td><p>{item.price}р</p></td>}
                    <td>
                      {isAuth ?
                        < button
                          onClick={() => handleBasket(item.id, item.articul)}
                          className="in_basket">
                          В корзину
                        </button> :

                        <NavLink style={{color: "white", textDecoration: "none"}} to='/login'>
                          <button className="in_basket" onClick={() => setCatName('')}> Войти</button>
                        </NavLink>

                      }
                    </td>
                  </tr>
                )
              }) : ''}
            </Fancybox>
            </tbody>
          </table>
          {!show || products.length == 0 ? "" :
            <div className="show_div">
              <button className="show_btn"
                      disabled={load}
                      onClick={() => handleGetProducts()}>
                {load ? "Грузим :)" : "Показать ещё..."}
              </button>
            </div>}
        </div>
      }
    </div>
  )
}
		

	
