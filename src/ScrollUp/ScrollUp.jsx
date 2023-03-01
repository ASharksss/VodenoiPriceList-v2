import React, {useEffect} from "react";
import {IoIosArrowUp} from 'react-icons/io'

export const ScrollUp = () => {
    let btn = document.getElementsByClassName('button_scroll')

    function magic() {
        if (window.pageYOffset > 20) {
            btn[0].style.opacity = '1'
        } else {
            btn[0].style.opacity = '0'
        }
    }

    useEffect(() => {
        btn[0].style.opacity = '0'
        window.onscroll = magic
    })

    function ScrollUp() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button className='button_scroll' onClick={ScrollUp}>
            <IoIosArrowUp size={20}/>
        </button>
    )
}