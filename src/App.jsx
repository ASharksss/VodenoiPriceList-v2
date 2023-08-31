import React, {useState, useEffect} from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom';
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
import {Login} from "./User/Login";
import {UserList} from "./User/UserList";
import {NewUser} from "./User/NewUser";
import Profile from "./Profile/Profile";
import DetailOrder from "./Profile/DetailOrder";

function App() {
  const navigate = useNavigate()
  const [loopBasket, setLoopBasket] = useState(0)
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])
  const [countBasket, setCountBasket] = useState([])
  const [catName, setCatName] = useState('')
  const [isAuth, setIsAuth] = useState(false)
  const [role, setRole] = useState('')


  const notify = (name) => toast.success(name + " добавлен в корзину!");


  useEffect(() => {
    axios.get('/all').then(response => {
      setCategories(response.data.categories)
    })
  }, [])

  useEffect(() => {
    setCatName('')
  }, [navigate])

  useEffect(() => {
    let token_life = localStorage.getItem('token_life')
    let refresh_token = localStorage.getItem('refresh_token')
    let auth = localStorage.getItem('isAuth')
    let _role = localStorage.getItem('role')
    if (auth && auth == 'true') {
      setIsAuth(true)
    }
    if (_role) {
      setRole(_role)
    }
    if (token_life && (new Date(Date.parse(token_life)) > new Date(new Date() - 300 * 1000))) {
      axios.post('/auth/protect', {token: refresh_token})
        .then(res => {
          if (res.data.serverStatus == 1) {
            let currentTime = new Date()
            currentTime.setHours(currentTime.getHours() + 3)
            localStorage.setItem('token_life', currentTime)
            localStorage.setItem('token', res.data.access_token)
            localStorage.setItem('refresh_token', res.data.refresh_token)
            localStorage.setItem('role', res.data.role)
            setRole(res.data.role)
            setIsAuth(true)
          } else {
            setIsAuth(false)
            localStorage.setItem('isAuth', false)
            localStorage.removeItem('role')
            navigate('/')

          }
        })
    }
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
    <>
      <div className="App">
        <Header countBasket={loopBasket} isAuth={isAuth} role={role}/>
        {catName && <h2 className='price_catname'>{catName}</h2>}
        <Routes>
          <Route path='/' element={
            <PriceList handleBasket={handleBasket}
                       categories={categories}
                       products={products}
                       setProducts={setProducts}
                       setCatName={setCatName}
                       isAuth={isAuth}/>}/>
          <Route path='/colors' element={<Colors setCatName={setCatName}/>}>

          </Route>
          <Route path='/basket' element={
            <Basket products={products}
                    countBasket={countBasket}
                    setCountBasket={setCountBasket}
                    setLoopBasket={setLoopBasket}
                    basket={basket}
                    setBasket={setBasket}/>}/>
          <Route path='/order' element={
            <Order
              countBasket={countBasket}
              basket={basket}
              setLoopBasket={setLoopBasket}/>
          }/>
          <Route path='/contact'
                 element={<Contact setCatName={setCatName}/>}/>
          <Route path='/rrc' element={<Rrc setCatName={setCatName}/>}/>
          <Route path='/user/list' element={<UserList/>}/>
          <Route path='/create' element={<NewUser/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/detailOrder' element={<DetailOrder/>}/>
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
      <Routes>
        <Route path='/login' element={<Login setIsAuth={setIsAuth}/>}/>
      </Routes>
    </>
  );
}

export default App;
