import React, {useState, useEffect} from "react";
import axios from "axios"

export const Sidebar = ({fish, setFish, setCount, setShow, setCId, setMessage, setCatName}) => {
  const [dis, setDis] = useState(false)
  const [selected, setSelected] = useState(0)

  function handleGetProducts(id, name) {
    setFish([])
    setDis(true)
    setCount(1)
    setCatName('')
    setShow(true)
    setMessage('')
    setCId(parseInt(id))
    setSelected(id)
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

  useEffect(() => {
    if (fish.length === 0) return;
    const randItem = Math.floor(Math.random() * fish.length)
    handleGetProducts(fish[randItem].id, fish[randItem].name)
  }, [fish])

  if (fish.length > 0) {
    return (
      <div className="sidebar">
        <div className="name_sidebar">
          <h2 className='name_sidebar-title'>Виды приманок</h2>
        </div>
        <div className="sidebar_links">
          <div className="hy">
            <h2 className='season_title'>Голография</h2>
            {
              fish.map((item) => {
                  if (item.season == "Голография") {
                    return (
                      <button disabled={dis} key={item.id} style={item.id === selected ? {backgroundColor: 'rgb(6 60 5 / 75%)', color: '#fff'} : null} onClick={() => {
                        handleGetProducts(item.id, item.name)
                      }}> {item.name} </button>
                    )
                  }
                }
              )
            }
          </div>
          <div className="summer">
            <h2 className='season_title'>Лето</h2>
            {
              fish.map((item) => {
                  if (item.season == "Лето") {
                    return (
                      <button disabled={dis} key={item.id} style={item.id === selected ? {backgroundColor: 'rgb(6 60 5 / 75%)', color: '#fff'} : null} onClick={() => {
                        handleGetProducts(item.id, item.name)
                      }}> {item.name} </button>
                    )

                  }

                }
              )
            }
          </div>
          <div className="winter">
            <h2 className='season_title'>Зима/Лето</h2>
            {
              fish.map((item) => {
                  if (item.season == "Зима") {
                    return (
                      <button disabled={dis} key={item.id} style={item.id === selected ? {backgroundColor: 'rgb(6 60 5 / 75%)', color: '#fff'} : null} onClick={() => {
                        handleGetProducts(item.id, item.name)
                      }}> {item.name} </button>
                    )
                  }
                }
              )
            }
          </div>

        </div>
      </div>
    )
  }
}
