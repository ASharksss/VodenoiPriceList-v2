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
                <p>Телефон: +7(953)-491-17-11</p>
                <p>Электронная почта: four.and.one@yandex.ru</p>
                <p>Адрес: г.Казань, ул.Техническая, 37</p>
            </div>
        </div>
    )
}