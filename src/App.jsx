import React, {useState, useEffect} from 'react'
import {Route, Routes} from 'react-router-dom';
import axios from 'axios'
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

import {Header} from './Header/Header';
import {PriceList} from './PriceList/PriceList';
import {Basket} from './Basket/Basket';
import {Order} from './Order/Order';
import {Contact} from "./Contact/Contact";
import {Rrc} from "./Links/Rrc"
import {Colors} from "./Links/Colors";

function App() {

  const [loopBasket, setLoopBasket] = useState(0)
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])
  const [countBasket, setCountBasket] = useState([])
  const [catName, setCatName] = useState('')


  const notify = (name) => toast.success(name + " добавлен в корзину!");


  useEffect(() => {
    axios.get('/all').then(response => {
      setCategories(response.data.categories)
    })
  }, [])

  useEffect(() => {
    let basket = localStorage.getItem('basket')
    if (basket) {
      basket = JSON.parse(basket)
      let length = Object.keys(basket).length;
      setLoopBasket(length)
      setCountBasket(Object.entries(basket))
    }
  }, [])

  function handleBasket(id, name) {
    const basket = localStorage.getItem('basket')
    let obj = {}
    let objBasket = JSON.parse(basket)
    if (!basket) {
      obj['_id' + id] = 1
      localStorage.setItem('basket', JSON.stringify(obj))
      setLoopBasket(1)
      setCountBasket(Object.entries(obj))
    } else {
      if (objBasket.hasOwnProperty('_id' + id) == false) {
        objBasket['_id' + id] = 1
      } else {
        objBasket['_id' + id] += 1
      }
      localStorage.setItem('basket', JSON.stringify(objBasket))
      let length = Object.keys(objBasket).length;
      setLoopBasket(length)
    }
    setCountBasket(Object.entries(objBasket))
    notify(name)
  }


  return (
    <div className="App">
      <Header countBasket={loopBasket}/>
      {catName && <h2 className='price_catname'>{catName}</h2>}
      <Routes>
        <Route path='/' element={
          <PriceList handleBasket={handleBasket}
                     categories={categories}
                     products={products}
                     setProducts={setProducts}
                     setCatName={setCatName}/>}/>
        <Route path='/colors' element={<Colors setCatName={setCatName} />}>

        </Route>
        <Route path='/basket' element={
          <Basket products={products}
                  countBasket={countBasket}
                  setCountBasket={setCountBasket}
                  setLoopBasket={setLoopBasket}
                  basket={basket}
                  setBasket={setBasket}
                  setCatName={setCatName}/>}/>
        <Route path='/order' element={
          <Order
            countBasket={countBasket}
            basket={basket}
            setLoopBasket={setLoopBasket}/>
        }/>
        <Route path='/contact'
               element={<Contact setCatName={setCatName}/>}/>
        <Route path='/rrc' element={<Rrc setCatName={setCatName} />}/>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
