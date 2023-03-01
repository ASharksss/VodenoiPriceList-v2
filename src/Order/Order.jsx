import React, {useState} from 'react'
import axios from "axios";

export const Order = ({countBasket, basket, setLoopBasket}) => {
    const [fio, setFIO] = useState('')
    const [tel, setTel] = useState('')
    const [load, setLoad] = useState(false)

    function handleSubmit() {
        alert('Заказ отправлен в обработку!')
        setLoad(true)
        axios.post('/order', {
            order: basket,
            count: countBasket,
            fio: fio,
            tel: tel
        }).then(res => {
            if (res.data.serverStatus == 1) {
                localStorage.removeItem('basket')
                setLoad(false)
                setLoopBasket(0)
                window.location.replace(window.location.protocol + "//" + window.location.host)
            }
        })
    }

    return (
        <div className="order">
            {load ?
                <div className="order_titles">
                    <h1>Отправка оператору, можете закрывать эту страницу.
                        После получения оператором заявки, страница закроется сама</h1>
                </div>
                :
                <>
                    <div className="order_titles">
                        <h1>Заполните данные о себе</h1>
                        <h3>После заполнения наш менеджер перезвонит Вам для обговора деталей</h3>
                    </div>
                    <input onChange={e => setFIO(e.target.value)} type="text" value={fio}
                           placeholder='Введите своё имя и наименование организации'/>
                    <input onChange={e => setTel(e.target.value)} type="number" value={tel}
                           placeholder='Введите свой номер телефона'/>
                    <button onClick={() => handleSubmit()}>Отправить</button>
                </>
            }
        </div>
    )
}