import React, {useState} from "react";
import axios from "axios"

export const Sidebar = ({fish, setFish, setCount, setShow, setCId, setMessage, setCatName}) => {
    const [dis, setDis] = useState(false)

    function handleGetProducts(id, name) {
        setFish([])
        setDis(true)
        setCount(1)
        setCatName('')
        setShow(true)
        setMessage('')
        setCId(parseInt(id))
        axios.get('/category/' + id + '/1').then(response => {
            if (response.data.products.length > 0) {
                setFish(response.data.products)
                if (response.data.nextPage) {
                    setCount(prevState => prevState + 1)
                } else {
                    setShow(false)
                }
            } else {
                setMessage('В этой категории пока нет товаров :(')
            }
            setDis(false)
        })
        setCatName(name)
        document.title = 'VODENOI | ' + name
    }

    if (fish.length > 0) {
        return (
            <div className="sidebar">
                <div className="name_sidebar">
                    <h2>Виды приманок</h2>
                </div>
                <div className="sidebar_links">
                    {
                        fish.map((item) => (
                            <button disabled={dis} key={item.id} onClick={() => {
                                handleGetProducts(item.id, item.name)
                            }}> {item.name} </button>
                        ))
                    }
                </div>
            </div>
        )
    }
}