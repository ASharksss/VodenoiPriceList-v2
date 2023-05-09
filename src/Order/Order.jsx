import React, {useState} from 'react'
import axios from "axios";

export const Order = ({countBasket, basket, setLoopBasket}) => {
    const [fio, setFIO] = useState('')
    const [tel, setTel] = useState('')
    const [load, setLoad] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("file", selectedFile);
        formData.append("order", JSON.stringify(basket))
        formData.append("count", JSON.stringify(countBasket))
        formData.append("fio", fio)
        formData.append("tel", tel)
        try {
            alert('Заказ отправлен в обработку!')
            setLoad(true)
            await axios({
                method: "post",
                url: "/order",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            }).then(res => {
                if (res.data.serverStatus == 1) {
                    localStorage.removeItem('basket')
                    setLoad(false)
                    setLoopBasket(0)
                    window.location.replace(window.location.protocol + "//" + window.location.host)
                }
            })
        } catch(error) {
            setLoad(false)
            console.log(error)
        }
    }

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
        console.log(event.target.files[0])
    }

    return (
        <div className="order">
            {load ?
                <div className="order_titles">
                    <h1>Отправка оператору, можете закрывать эту страницу.
                        После получения оператором заявки, страница закроется сама</h1>
                </div>
                :
                <form style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
                  onSubmit={handleSubmit}>
                    <div className="order_titles">
                        <h1>Заполните данные о себе</h1>
                        <h3>После заполнения наш менеджер перезвонит Вам для обговора деталей</h3>
                    </div>
                    <input onChange={e => setFIO(e.target.value)} type="text" value={fio}
                           placeholder='Введите своё имя и наименование организации' required/>
                    <input onChange={e => setTel(e.target.value)} type="number" value={tel}
                           placeholder='Введите свой номер телефона' required/>
                    <label>
                        Прикрепите карту партнера
                        <input onChange={handleFileSelect} type="file" accept="application/msword, application/pdf"/>
                    </label>
                    <button>Отправить</button>
                </form>
            }
        </div>
    )
}