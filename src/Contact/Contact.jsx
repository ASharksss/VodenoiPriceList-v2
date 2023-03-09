import React, {useEffect} from "react";

export const Contact = ({setCatName}) => {
    useEffect(() => {
        document.title = 'Контакты'
        setCatName('')
    }, [])
    return(
        <div className="contact">
            <h1>Наши контакты</h1>
            <div className="contact_inf">
                <p>Телефон: +7(967)-371-17-11</p>
                <p>Электронная почта: v-kprp@yandex.ru</p>
                <p>Адрес: г.Казань, ул.Техническая, 39</p>
            </div>
        </div>
    )
}